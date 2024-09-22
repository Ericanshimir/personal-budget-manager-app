Personal Budget Manager

Description

The Personal Budget Manager is a simple application that allows users to track their expenses and manage their budget. It enables users to add, edit, delete, and view expenses, with a visual summary of their spending by category. The application also provides alerts when budget limits are reached.

Features

Add Expense: Users can add new expenses with details like amount, date, and category.
Edit Expense: Users can edit any previously added expense.
Delete Expense: Users can delete expenses that are no longer relevant.
View Expense List: Users can view a list of all expenses.
Expense Summary: A pie chart visually summarizes the expenses by category.
Budget Alerts: Users receive alerts when nearing or exceeding the budget limit for a category.

Setup Instructions

1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/your-username/personal-budget-manager-app.git

2. Navigate to the Project Directory

cd personal-budget-manager

3. Install Dependencies
Make sure you have Node.js and npm installed. Then, install the necessary dependencies:

npm install

4. Run the Application
   
To start the application in development mode, run:

npm start

This will open the app in your browser. If it doesn’t open automatically, navigate to http://localhost:3000.

5. Build the Application
To create a production-ready build, run:

npm run build.

Dependencies

React: Frontend framework for building the user interface.
Chart.js: Used for visualizing expenses in a pie chart.
react-chartjs-2: React wrapper for Chart.js to easily integrate charts in the application.

Folder Structure

src/
App.js: Main application component.
ExpenseForm.js: Form for adding and editing expenses.
ExpenseList.js: Component for listing and managing expenses.
ExpenseSummary.js: Component for displaying a pie chart of expenses.
BudgetAlerts.js: Component for displaying budget alerts.
App.css: Styling for the application.

Usage

Adding an Expense: Fill out the expense form with the amount, date, and category, then click "Add Expense."
Editing an Expense: Click the blue "Edit" button next to an expense, modify the details in the form, and save.
Deleting an Expense: Click the red "Delete" button to remove an expense from the list.
Viewing Expenses: All expenses are listed with the ability to edit or delete them.
Checking Budget Alerts: Budget limits are set for categories like food, entertainment, and others, with alerts displayed when limits are reached.
