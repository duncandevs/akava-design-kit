# Akava Design Kit

Akava Design Kit is a comprehensive UI component library based on Alena Zhukava's Design System, crafted to provide developers with a set of ready-to-use, modular components to build responsive and accessible web applications quickly and efficiently.

## Features

- **Component Diversity**: A wide range of UI components including buttons, cards, dialogs, tabs, tooltips, and more.
- **React and Radix UI Integration**: Built with React and leveraging Radix UI for accessibility.
- **Storybook-Powered Documentation**: Interactive component playgrounds provided by Storybook to visualize and test components in isolation.
- **Customizable Theming**: Theming support with CSS variables for easy customization.
- **Modern Tooling**: Utilizes Vite for an optimized build process and fast development iteration.

## Getting Started

Follow these steps to start using Akava Design Kit in your project.

### Prerequisites

- Node.js (LTS)
- npm/yarn

### Installation

1. Clone the repository:
shell
git clone https://github.com/duncandevs/akava-design-kit
cd akava-design-kit

2. Install the dependencies:
shell
npm install
or
yarn install

3. Start the development server:
shell
npm run dev
or
yarn dev

4. To view the Storybook documentation, run:
shell
npm run storybook
or
yarn storybook


## Usage

Import components from the Akava Design Kit into your React application:
jsx
```import { Button, Card } from 'akava-design-kit';
function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Welcome to Akava" description="Your UI design kit for rapid development." />
    </div>
  );
}```


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License.

## Contact

Duncan Maina - [linkedin](https://www.linkedin.com/in/duncan-maina-499677135/) - duncandevs@gmail.com

Project Link: [https://github.com/duncandevs/akava-design-kit](https://github.com/duncandevs/akava-design-kit)

## Acknowledgements

- [Alena Zhukava](https://www.figma.com/community/file/1267195373409722424)
- [Radix UI](https://www.radix-ui.com/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
