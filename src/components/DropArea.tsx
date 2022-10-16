import { useDropzone } from "react-dropzone";

export const DropArea = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div
        {...getRootProps({
          className:
            "p-[16px] mt-[16px] border rounded-[4px] border-dashed border-black border-[3px] bg-[#eeeeee] hover:border-[blue]",
        })}
      >
        <input {...getInputProps()} />
        <p>drop here....</p>
      </div>
      <div>
        <div>Drop File:</div>
        <div>{files}</div>
      </div>
    </>
  );
};
