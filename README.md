# PDF Text Extractor

A simple Python application that extracts text content from PDF documents.

## Features

- Extract text from PDF files
- Support for multi-page PDFs
- Save extracted text to file or display in console
- Interactive mode for easy use
- Command-line interface for automation
- Error handling for encrypted or corrupted PDFs

## Installation

1. Make sure you have Python 3.6+ installed
2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

Or install PyPDF2 directly:

```bash
pip install PyPDF2
```

## Usage

### Interactive Mode

Run the script without arguments for interactive mode:

```bash
python pdf_text_extractor.py
```

The application will prompt you for:
- PDF file path
- Whether to save the extracted text to a file
- Output file path (if saving)

### Command Line Mode

#### Extract and print to console:
```bash
python pdf_text_extractor.py "path/to/your/file.pdf"
```

#### Extract and save to file:
```bash
python pdf_text_extractor.py "path/to/your/file.pdf" "output.txt"
```

### Example with the included CV:

```bash
# Interactive mode
python pdf_text_extractor.py

# Direct extraction
python pdf_text_extractor.py "Montie CV Latest.pdf"

# Extract and save
python pdf_text_extractor.py "Montie CV Latest.pdf" "cv_text.txt"
```

## Features Explained

- **Multi-page support**: Extracts text from all pages in the PDF
- **Page markers**: Adds page separators in the output for clarity
- **Error handling**: Handles encrypted PDFs, corrupted files, and missing files
- **Progress indication**: Shows progress when processing multi-page documents
- **Flexible output**: Choose between console output or file saving

## Limitations

- Cannot extract text from image-based PDFs (scanned documents)
- Cannot handle password-protected/encrypted PDFs
- Text formatting may not be preserved exactly as in the original PDF
- Complex layouts might result in jumbled text order

## Troubleshooting

### "PyPDF2 library not found"
Install the required dependency:
```bash
pip install PyPDF2
```

### "PDF is encrypted and cannot be read"
The PDF is password-protected. You'll need to remove the password protection first.

### "Could not extract text from page X"
Some pages might contain only images or have complex formatting. The application will skip these pages and continue with others.

## License

This project is open source and available under the MIT License.