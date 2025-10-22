import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Footprints } from "lucide-react";
import useDisableBack from "@/hooks/useDisableBack";

const Loading = () => {
  useDisableBack(true);

  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "사용자";

  useEffect(() => {
    if (!location.state?.userName) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results", { state: { userName } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, userName]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background grid-pattern">
      <div className="text-center fade-in">
        <div className="mb-8 flex justify-center gap-4">
          <Footprints
            className="w-16 h-16 text-primary animate-bounce-foot"
            style={{ animationDelay: "0s" }}
            strokeWidth={2.5}
          />
          <Footprints
            className="w-16 h-16 text-accent animate-bounce-foot"
            style={{ animationDelay: "0.3s" }}
            strokeWidth={2.5}
          />
          <Footprints
            className="w-16 h-16 text-primary animate-bounce-foot"
            style={{ animationDelay: "0.6s" }}
            strokeWidth={2.5}
          />
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4">
          촬영 중입니다
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          <span className="text-primary">{userName}</span>님의 발BTI를 분석하고 있어요
        </p>

        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
