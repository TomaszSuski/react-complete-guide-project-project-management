import React from "react";

interface SingleProjectButtonProps {
    id: number;
    title: string;
    onClick: (id: number) => void;
}

export default function SingleProjectButton({ id, title, onClick }: SingleProjectButtonProps) {
    return (
        <li className="w-full mb-2" key={id}>
            <button
                className="w-full py-2 text-left text-stone-400 hover:text-stone-50"
                type="button"
                onClick={() => onClick(id)}
            >
                {title}
            </button>
        </li>
    );
}