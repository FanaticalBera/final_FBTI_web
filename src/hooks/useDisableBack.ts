import { useEffect } from "react";

export default function useDisableBack(active: boolean) { 
    useEffect(() => {
        if(!active) return;
        
        // 현재 url을 한 번 더 push해서 뒤로가기를 눌러도 제자리에 위치
        const push = () => window.history.pushState(null, "", window.location.href); 
        push();

        const onPop = (e: PopStateEvent) => { 
            push(); 
        };

        window.addEventListener("popstate", onPop); 
        return() => window.removeEventListener("popstate", onPop); 

    }, [active]);

}