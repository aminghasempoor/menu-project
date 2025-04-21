import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
interface UploadSystemProps {
    selectedImage: string | null;
    handleUploadChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    fileType: string | null;
    showAddIcon: boolean;
}

const UploadSystem: React.FC<UploadSystemProps> = ({ selectedImage, handleUploadChange, fileType, showAddIcon }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="w-full">
            {showAddIcon ? (
                <div
                    className="flex flex-col items-center justify-center p-3 h-[100px] cursor-pointer"
                    onClick={handleClick}
                >
                    <Plus className="text-gray-400 w-6 h-6" />
                    <p className="text-xs text-center text-muted-foreground mt-2 font-medium">
                        فرمت قابل قبول: png, jpg
                        <br />
                        حداکثر 3Mb
                    </p>
                </div>
            ) : (
                fileType?.startsWith("image/") && (
                    <Card
                        className="w-full h-[150px] border-none flex items-center justify-center overflow-hidden cursor-pointer"
                        onClick={handleClick}
                    >
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-contain"
                            style={{ backgroundImage: `url(${selectedImage})` }}
                        />
                    </Card>
                )
            )}

            <input type="file" accept="image/*" className="hidden" onChange={handleUploadChange} ref={fileInputRef} />
        </div>
    );
};

export default UploadSystem;
