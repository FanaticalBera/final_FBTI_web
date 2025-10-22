export function isVaildUserName(s: string): boolean { 
    const t = (s || "").trim();
    if(t.length < 2 || t.length > 20) return false; 

    for(let i =0; i < t.length; i++) { 
        const ch = t[i]; 
        const code = ch.charCodeAt(0);

        if(ch === " ") continue; 
        if((code >= 65 && code <= 90) || (code >=97 && code <= 122)) continue;

        const isHangulSyllable = code >= 0xac00 && code <= 0xd7a3; 
        const isjamo = (code >= 0x3131 && code <= 0x314e) || (code >= 0x314f && code <= 0x3163);
        if (isHangulSyllable && !isjamo) continue; 

        return false; 
    }
    const plain = t.replace(/\s+/g,"");
    if(plain.length < 2) return false; 

    return true;
}