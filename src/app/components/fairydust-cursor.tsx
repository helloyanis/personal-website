"use client"
import { fairyDustCursor, snowflakeCursor } from "cursor-effects";
import { useEffect } from "react";
export default function FairyDustCursor() {
    useEffect(() => {
        const date = new Date();
        if (date.getMonth() === 11 || date.getMonth() === 0) {
            snowflakeCursor();
        } else {
            fairyDustCursor();
        }
    }, []);
    return null;
}