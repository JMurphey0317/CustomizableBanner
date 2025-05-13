# Custom Banner Component

This repository contains the `Custom Banner` Lightning Aura Component and its supporting Apex classes. This component can be used to display a customizable banner with images and rich text content.

---

## Files

### Aura Component
- **BannerComponent.cmp**: The main Aura component file.
- **BannerComponentController.js**: The client-side controller for the component.
- **BannerComponentHelper.js**: The helper file for the component's logic.
- **BannerComponent.css**: The CSS file for styling the component.
- **BannerComponent.design**: The design file for configuring the component in the Lightning App Builder.

### Apex Classes
- **BannerComponentController.cls**: The server-side Apex controller for the component.
- **BannerComponentControllerTest.cls**: The test class for the Apex controller.

---

## Features

- Fully customizable banner dimensions, background color, and text.
- Supports both left and right images with customizable dimensions and alt text.
- Rich text in the center of the banner.
- Backward compatibility with legacy attributes.
- Responsive design for mobile and desktop views.

---

## Usage

1. Deploy all files to your Salesforce org.
2. Add the `Custom Banner` component to a Lightning page using the Lightning App Builder.
3. Configure the attributes in the App Builder as needed.

---

## Testing

The `BannerComponentControllerTest` class includes comprehensive test cases to validate the functionality of the Apex controller.

To run the tests:
1. Go to **Setup** > **Apex Test Execution**.
2. Select `BannerComponentControllerTest`.
3. Run the tests and ensure all pass successfully.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.