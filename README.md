# Hospital Management System

A simple web application for managing patients in a hospital.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
  - [Form Submission](#form-submission)
  - [Focus Management](#focus-management)
  - [UseEffect Hooks](#useeffect-hooks)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a simple hospital management system built with React and styled-components. It allows users to add patient details, including their name and age. The form includes validation for both fields, and the focus is automatically set to the name input when the page loads.

## Features

- Add patient details (name and age).
- Automatic focus on the name input field.
- Simple form validation.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd hospital-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. Use the form to add patient details.

### Form Submission

The form is submitted through the `handelSubmit` function, preventing the default form behavior. The patient details are stored in the `patient` state and logged to the console.

### Focus Management

The `useEffect` hook is used to automatically focus on the name input field after the component mounts. This improves the user experience by making it convenient to start typing immediately.

### UseEffect Hooks

Two `useEffect` hooks are employed in this project. The first changes the document title to "Hospital Management" when the component mounts. The second ensures that the name input is focused after the component mounts.
