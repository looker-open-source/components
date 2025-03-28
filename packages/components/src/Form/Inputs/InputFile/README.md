# InputFile

Render a file input form element.

## HandleFile

A function that takes the uploaded file

```tsx
function Basic(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    ...restProps
  } = props;
  return <InputFile handleFile={handleFile} {...restProps} />;
}
```

## Accept

A string containing one or more unique file type specifiers i.e. '.pdf', each file type separated by a comma.

```tsx
function Accept(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    accept = '.pdf',
    value = 'Accepts only PDF files',
    ...restProps
  } = props;

  return (
    <InputFile
      handleFile={handleFile}
      accept={accept}
      value={value}
      {...restProps}
    />
  );
}
```

## ButtonText

Text for the button which uploads the file.

```tsx
function ButtonText(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    buttonText = 'Browse local files',
    ...restProps
  } = props;

  return (
    <InputFile handleFile={handleFile} buttonText={buttonText} {...restProps} />
  );
}
```

## Placeholder

Placeholder text within the text input box.

```tsx
function Placeholder(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    placeholder = 'Select a file to upload',
    ...restProps
  } = props;

  return (
    <InputFile
      handleFile={handleFile}
      placeholder={placeholder}
      {...restProps}
    />
  );
}
```
