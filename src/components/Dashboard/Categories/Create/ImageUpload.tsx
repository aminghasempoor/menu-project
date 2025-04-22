import React, { useEffect, useState } from "react";
import UploadSystem from "@/core/UploadSystem";

interface ImageUploadProps {
    value: string | File | null;
    onChange: (file: File) => void;
}

const ImageUpload:React.FC<ImageUploadProps>=({ value, onChange })=> {
    const [beforeImg, setBeforeImg] = useState<string | null>(
        value ? (typeof value === "string" ? value : URL.createObjectURL(value)) : null
    );
    const [beforeFileType, setBeforeFileType] = useState<string | null>(value ? "image/" : null);
    const [showBeforeImage, setShowBeforeImage] = useState<boolean>(!value);

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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = event.target?.files?.[0];
        if (uploadedFile) {
            const fileType = uploadedFile.type;
            setBeforeImg(URL.createObjectURL(uploadedFile));
            setBeforeFileType(fileType);
            onChange(uploadedFile);
            setShowBeforeImage(false);
        }
    };

    return (
        <UploadSystem
            selectedImage={beforeImg}
            handleUploadChange={handleFileChange}
            fileType={beforeFileType}
            // imageSize={[250, 150]}
            showAddIcon={showBeforeImage}
        />
    );
};

export default ImageUpload;
