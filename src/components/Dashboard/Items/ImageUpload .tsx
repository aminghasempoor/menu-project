import React, { useEffect, useState } from "react";
import UploadSystem from "@/core/UploadSystem";

const ImageUpload = ({ value, onChange }) => {
    const [beforeImg, setBeforeImg] = useState(value ? value : null);
    const [beforeFileType, setBeforeFileType] = useState(value ? "image/" : null);
    const [beforeFileName, setBeforeFileName] = useState(null);
    const [showBeforeImage, setShowBeforeImage] = useState(!value);

    useEffect(() => {
        if (value) {
            setShowBeforeImage(false);
            if (typeof value === "string") {
                setBeforeImg(value);
                setBeforeFileType("image/");
            } else if (value instanceof File) {
                setBeforeImg(URL.createObjectURL(value));
                setBeforeFileType(value.type);
            }
        }
    }, [value]);

    const handleFileChange = (event) => {
        const uploadedFile = event.target?.files?.[0];
        if (uploadedFile) {
            const fileType = uploadedFile.type;
            const fileName = uploadedFile.name;
            setBeforeImg(URL.createObjectURL(uploadedFile));
            setBeforeFileType(fileType);
            setBeforeFileName(fileName);
            onChange(uploadedFile);
            setShowBeforeImage(false);
        }
    };

    return (
        <UploadSystem
            selectedImage={beforeImg}
            handleUploadChange={handleFileChange}
            fileType={beforeFileType}
            fileName={beforeFileName}
            setSelectedImage={setBeforeImg}
            // imageSize={[250, 150]}
            setShowAddIcon={setShowBeforeImage}
            showAddIcon={showBeforeImage}
        />
    );
};
export default ImageUpload;