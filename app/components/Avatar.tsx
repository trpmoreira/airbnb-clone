'use client';

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            height={30}
            width={30}
            alt="User Avatar"
            src="/images/placeholder.jpg"
        />
    );
}

export default Avatar;