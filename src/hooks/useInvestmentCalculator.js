import { useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../util/storage.js';

const DEFAULT_INPUT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
};

const VALIDATION_RULES = {
    initialInvestment: {
        min: 1,
        message: 'Initial investment must be greater than 0'
    },
    annualInvestment: {
        min: 0,
        message: 'Annual investment cannot be negative'
    },
    expectedReturn: {
        min: -100,
        max: 100,
        message: 'Expected return must be between -100% and 100%'
    },
    duration: {
        min: 1,
        max: 100,
        message: 'Duration must be between 1 and 100 years'
    }
};

export function useInvestmentCalculator() {
    const [userInput, setUserInput] = useState(() =>
        loadFromLocalStorage('investmentInput', DEFAULT_INPUT)
    );
    const [errors, setErrors] = useState({});

    // Auto-save to localStorage
    useEffect(() => {
        saveToLocalStorage('investmentInput', userInput);
    }, [userInput]);

    const validateInput = (input) => {
        const newErrors = {};

        Object.entries(VALIDATION_RULES).forEach(([field, rules]) => {
            const value = input[field];

            if (rules.min !== undefined && value < rules.min) {
                newErrors[field] = rules.message;
            }
            if (rules.max !== undefined && value > rules.max) {
                newErrors[field] = rules.message;
            }
        });

        return newErrors;
    };

    const updateInput = (field, value) => {
        setUserInput(prevInput => {
            const updatedInput = {
                ...prevInput,
                [field]: +value,
            };

            const newErrors = validateInput(updatedInput);
            setErrors(newErrors);

            return updatedInput;
        });
    };

    const resetToDefaults = () => {
        setUserInput(DEFAULT_INPUT);
        setErrors({});
    };

    const applyPreset = (presetSettings) => {
        setUserInput(presetSettings);
        setErrors({});
    };

    const isValid = Object.keys(errors).length === 0 && userInput.duration >= 1;

    return {
        userInput,
        errors,
        isValid,
        updateInput,
        resetToDefaults,
        applyPreset,
        defaultInput: DEFAULT_INPUT
    };
}
