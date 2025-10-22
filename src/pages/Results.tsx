import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import resultImage from "@/assets/result-example.png";
import qrImage from "@/assets/qr-code.png";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || "사용자";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background grid-pattern py-12 px-4">
      <div className="max-w-6xl mx-auto fade-in">
        {/* Header */}
        <div className="text-center mb-12 slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            <span className="text-primary">{userName}</span>님의 발BTI 결과
          </h1>
          <p className="text-lg text-muted-foreground">
            나의 발BTI를 확인해보세요!
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Result Image Block */}
          <div className="slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-3xl">
              <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
                <h2 className="text-xl font-bold text-foreground">발BTI 분석 결과</h2>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 border-2 border-primary/10">
                  <img 
                    src={resultImage} 
                    alt="발BTI 결과" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Block */}
          <div className="slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-3xl">
              <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
                <h2 className="text-xl font-bold text-foreground">상세 보고서</h2>
              </div>
              <div className="p-6">
                <div className="bg-white rounded-2xl p-8 flex items-center justify-center border-2 border-primary/10">
                  <img 
                    src={qrImage} 
                    alt="QR 코드" 
                    className="w-full max-w-xs h-auto"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  QR 코드를 스캔하여 상세 보고서를 확인하세요!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center slide-up" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <Home className="mr-2 h-5 w-5" />
            처음으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
