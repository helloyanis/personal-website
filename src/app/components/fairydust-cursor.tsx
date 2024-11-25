"use client"
import { fairyDustCursor } from "cursor-effects";
import { useEffect } from "react";
export default function FairyDustCursor() {
    useEffect(() => {
        fairyDustCursor();
    }, []);
    return null;
}