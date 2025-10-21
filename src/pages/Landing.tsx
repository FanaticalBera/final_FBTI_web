import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footprints } from "lucide-react";

const Landing = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      navigate("/loading", { state: { userName: name } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background grid-pattern">
      <div className="w-full max-w-md px-6 fade-in">
        <div className="text-center mb-12 slide-up">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 mb-6">
            <Footprints className="w-12 h-12 text-primary" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-bold mb-3 text-foreground">
            FBTI
          </h1>
          <p className="text-lg text-muted-foreground">
            나의 발 성격 유형을 알아보세요
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-2xl p-8 border-2 border-primary/20 slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                이름을 입력해주세요
              </label>
              <Input
                id="name"
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleStart()}
                className="h-14 text-lg px-6 bg-background border-2 border-input focus:border-primary transition-colors"
              />
            </div>

            <Button
              onClick={handleStart}
              disabled={!name.trim()}
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              촬영 시작하기
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          발의 모양으로 당신의 성격을 분석합니다
        </p>
      </div>
    </div>
  );
};

export default Landing;
