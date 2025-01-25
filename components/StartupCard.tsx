import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const {_createdAt, views, author:{id:authorID, name}, title, category, _id, image}=post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
            <Link href={`/user/${authorID}`}>
                <p className="text-16-medium line-clamp-1">{name}</p>
            </Link>
            <Link href={`/startup/${_id}`}>
                <h3 className="text-26-semibold line-clamp-1 mt-2">
                    {title}
                </h3>
            </Link>
        </div>
        <Link href={`/user/${authorID}`}>
            <Image src='https://placehold.co/600x400' alt='placeholder' width={48} height={48} className="rounded-full"></Image>
        </Link>
      </div>
    </li>
  );
};

export default StartupCard;
