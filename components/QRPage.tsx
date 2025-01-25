"use client"
import { useEffect, useState } from 'react';
import { useQRCode } from 'next-qrcode';

export default function AddressQRCode() {
    const [qrData, setQRData] = useState('');
    const { Image } = useQRCode();
    const addressId = 'your-hardcoded-address-id'; // Replace with your actual address ID

    useEffect(() => {
        const fetchQRCode = async () => {
            const response = await fetch(`/api/generate-qr?id=${addressId}`);
            const data = await response.json();
            setQRData(data.url);
        };

        fetchQRCode();
    }, []);

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Address QR Code</h2>
            {qrData ? (
                <Image
                    text={qrData}
                    options={{
                        type: 'image/jpeg',
                        quality: 0.3,
                        errorCorrectionLevel: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                            dark: '#000000',
                            light: '#FFFFFF',
                        },
                    }}
                />
            ) : (
                <div className="w-48 h-48 bg-gray-200 animate-pulse rounded-lg"></div>
            )}
            <p className="mt-4 text-sm text-gray-600">Scan to view address details</p>
        </div>
    );
}
