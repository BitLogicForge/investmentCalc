# Investment Calculator

A modern, interactive investment calculator built with React and Vite. This application helps users calculate and visualize investment growth over time with customizable parameters and preset configurations.

![Investment Calculator](./public/investment-calculator-logo.png)

## ✨ Features

- **Interactive Input Forms**: User-friendly input fields for investment parameters
- **Real-time Calculations**: Instant calculation and visualization of investment results
- **Animated UI**: Smooth animations powered by Framer Motion
- **Preset Configurations**: Quick-start presets for Conservative, Moderate, and Aggressive investment strategies
- **Data Export**: Export calculation results to CSV format
- **Input Validation**: Comprehensive validation with helpful error messages
- **Local Storage**: Automatically saves your inputs for future sessions
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd investmentCalc
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks
- `npm run clean` - Clean install (removes node_modules and package-lock.json)
- `npm run fresh` - Alias for clean install
- `npm run predeploy` - Build the project before deployment
- `npm run deploy` - Deploy to GitHub Pages

## 🚀 Deployment

### GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. **Setup Repository**:

   - Push your code to a GitHub repository
   - Update the `homepage` field in `package.json` with your GitHub username and repository name

2. **Deploy**:

   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch" as source
   - Choose `gh-pages` branch
   - Your app will be available at `https://yourusername.github.io/investmentCalc`

### Manual Deployment

You can also deploy the built files manually:

1. Build the project:

   ```bash
   npm run build
   ```

2. The `dist` folder contains all the files needed for deployment to any static hosting service.

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Application header
│   ├── UserInput.jsx    # Input form component
│   ├── Results.jsx      # Results display wrapper
│   ├── InvestmentSummary.jsx    # Summary statistics
│   ├── InvestmentTable.jsx     # Detailed results table
│   ├── Presets.jsx      # Investment presets
│   └── common/          # Reusable UI components
│       ├── Button.jsx
│       ├── ErrorDisplay.jsx
│       └── InputField.jsx
├── hooks/               # Custom React hooks
│   ├── useInvestmentCalculator.js  # Main calculation logic
│   └── useExport.js     # Data export functionality
├── util/                # Utility functions
│   ├── investment.js    # Investment calculation algorithms
│   └── storage.js       # LocalStorage utilities
├── assets/              # Static assets
├── App.jsx             # Main application component
├── index.jsx           # Application entry point
└── index.css           # Global styles
```

## 🧮 How It Works

### Investment Calculation

The application calculates compound investment growth using the following parameters:

- **Initial Investment**: Starting amount invested
- **Annual Investment**: Additional amount invested each year
- **Expected Return**: Annual rate of return (percentage)
- **Duration**: Investment period in years

### Calculation Formula

For each year, the application:

1. Calculates interest earned: `investmentValue × (expectedReturn / 100)`
2. Updates total value: `investmentValue + interestEarned + annualInvestment`
3. Tracks cumulative data for visualization

### Preset Strategies

- **Conservative**: Low risk (4% return), steady growth over 20 years
- **Moderate**: Balanced approach (7% return) over 15 years
- **Aggressive**: High risk/reward (10% return) over 10 years

## 🎯 Input Validation

The application includes comprehensive validation:

- **Initial Investment**: Must be greater than $0
- **Annual Investment**: Cannot be negative
- **Expected Return**: Must be between -100% and 100%
- **Duration**: Must be between 1 and 100 years

## 🎨 Technologies Used

- **React 19.1.0** - Component-based UI framework
- **Vite 7.0.2** - Fast build tool and dev server
- **Framer Motion 12.23.0** - Animation library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling with custom properties and gradients
- **Local Storage API** - Data persistence

## 🔧 Key Features Explained

### State Management

- Uses React hooks (`useState`, `useEffect`) for state management
- Custom hook `useInvestmentCalculator` centralizes calculation logic
- Automatic persistence to browser's local storage

### Animation System

- Framer Motion provides smooth enter/exit animations
- Staggered animations for results display
- Responsive hover and focus states

### Export Functionality

- Export calculation results to CSV format
- Includes all yearly data: year, interest earned, annual investment, and end-of-year value

### Error Handling

- Real-time input validation
- User-friendly error messages
- Visual feedback for invalid inputs

## 🎮 Usage Examples

### Basic Calculation

1. Enter your initial investment amount
2. Set your planned annual contributions
3. Estimate your expected annual return
4. Choose your investment duration
5. View detailed year-by-year results

### Using Presets

1. Click "Show Presets" button
2. Select from Conservative, Moderate, or Aggressive strategies
3. Preset values automatically populate the form
4. Customize as needed or calculate with preset values

### Exporting Data

1. Complete your calculation
2. Click the "Export to CSV" button in the results section
3. Save the file to analyze data in spreadsheet applications

## 🌟 Future Enhancements

Potential improvements for future versions:

- [ ] Multiple currency support
- [ ] Inflation adjustment calculations
- [ ] Tax consideration features
- [ ] Investment comparison tools
- [ ] Chart visualizations
- [ ] More sophisticated risk analysis
- [ ] Mobile app version
- [ ] Social sharing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Bug Reports & Feature Requests

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

---

**Built with ❤️ using React and Vite**
