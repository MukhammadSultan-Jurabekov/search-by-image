# Search by Image - Browser Extension

**Search by Image** is a browser extension that allows users to perform reverse image searches across multiple search engines. This tool is particularly useful for journalists, researchers, and anyone who needs to verify the authenticity of an image or find its source on the web.

## Features

- **Reverse Image Search**: Perform a reverse image search using Google, Bing, Yandex, and other supported search engines.
- **Simple UI**: A single button click initiates the search, making it easy to use.
- **Context Menu Integration**: Right-click on any image in the browser to start the search directly from the context menu.

## Installation

### Load the Extension in Chrome

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner of the page.
4. Click on "Load unpacked" and select the folder where this repository is located.
5. The extension should now appear in your list of installed extensions.

## Usage

1. After installing the extension, you'll see the extension icon in your browser toolbar.
2. To use the extension:
   - **Method 1**: Click on the extension icon and then click on the "Search by Image" button in the popup that appears. The extension will automatically look for the first image on the active tab and perform a reverse search.
   - **Method 2**: Right-click on any image on a webpage, then select "Search by Image" from the context menu. This will open multiple tabs with search results from different search engines.
3. The extension will open new tabs with search results for the selected image.

## Files

- **manifest.json**: The manifest file that defines the extension's settings, permissions, and entry points.
- **background.js**: The background script that handles the context menu integration and reverse search logic.
- **popup.html**: The HTML file that defines the user interface for the extension's popup.
- **popup.js**: The JavaScript file that handles user interactions within the popup.
- **icons/**: Directory containing icon files of various sizes used for the extension.

## Supported Search Engines

Currently, the extension supports the following search engines:

- Google Images
- Bing Images
- Yandex Images

You can add more search engines by modifying the `background.js` file.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to contact me at sjbkv21@gmail.com.

