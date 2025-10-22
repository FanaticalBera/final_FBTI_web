import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import useDisableBack from "@/hooks/useDisableBack";
import ENIH_img from "@/assets/ENIH.png"
import ENIH_qr from "@/assets/ENIH_QR.png";
import ENIL_img from "@/assets/ENIL.png"
import ENIL_qr from "@/assets/ENIL_QR.png";
import ENSH_img from "@/assets/ENSH.png"
import ENSH_qr from "@/assets/ENSH_QR.png";
import ENSL_img from "@/assets/ENSL.png"
import ENSL_qr from "@/assets/ENSL_QR.png";
import EWIH_img from "@/assets/EWIH.png"
import EWIH_qr from "@/assets/EWIH_QR.png";
import EWIL_img from "@/assets/EWIL.png"
import EWIL_qr from "@/assets/EWIL_QR.png";
import EWSH_img from "@/assets/EWSH.png"
import EWSH_qr from "@/assets/EWSH_QR.png";
import EWSL_img from "@/assets/EWSL.png"
import EWSL_qr from "@/assets/EWSL_QR.png";

import GNIH_img from "@/assets/GNIH.png";
import GNIH_qr from "@/assets/GNIH_QR.png"; 
import GNIL_img from "@/assets/GNIL.png";
import GNIL_qr from "@/assets/GNIL_QR.png"; 
import GNSH_img from "@/assets/GNSH.png";
import GNSH_qr from "@/assets/GNSH_QR.png"; 
import GNSL_img from "@/assets/GNSL.png";
import GNSL_qr from "@/assets/GNSL_QR.png"; 
import GWIH_img from "@/assets/GWIH.png";
import GWIH_qr from "@/assets/GWIH_QR.png"; 
import GWIL_img from "@/assets/GWIL.png";
import GWIL_qr from "@/assets/GWIL_QR.png"; 
import GWSH_img from "@/assets/GWSH.png";
import GWSH_qr from "@/assets/GWSH_QR.png"; 
import GWSL_img from "@/assets/GWSL.png";
import GWSL_qr from "@/assets/GWSL_QR.png"; 

import RNIH_img from "@/assets/RNIH.png";
import RNIH_qr from "@/assets/RNIH_QR.png";
import RNIL_img from "@/assets/RNIL.png";
import RNIL_qr from "@/assets/RNIL_QR.png";
import RNSH_img from "@/assets/RNSH.png";
import RNSH_qr from "@/assets/RNSH_QR.png";
import RNSL_img from "@/assets/RNSL.png";
import RNSL_qr from "@/assets/RNSL_QR.png";
import RWIH_img from "@/assets/RWIH.png";
import RWIH_qr from "@/assets/RWIH_QR.png";
import RWIL_img from "@/assets/RWIL.png";
import RWIL_qr from "@/assets/RWIL_QR.png";
import RWSH_img from "@/assets/RWSH.png";
import RWSH_qr from "@/assets/RWSH_QR.png";
import RWSL_img from "@/assets/RWSL.png";
import RWSL_qr from "@/assets/RWSL_QR.png";

const fbtiMap = {
  // R-타입 (8개)
  "RNIH": { img: RNIH_img, qr: RNIH_qr },
  "RNIL": { img: RNIL_img, qr: RNIL_qr },
  "RNSH": { img: RNSH_img, qr: RNSH_qr },
  "RNSL": { img: RNSL_img, qr: RNSL_qr },
  "RWIH": { img: RWIH_img, qr: RWIH_qr },
  "RWIL": { img: RWIL_img, qr: RWIL_qr },
  "RWSH": { img: RWSH_img, qr: RWSH_qr },
  "RWSL": { img: RWSL_img, qr: RWSL_qr },

  // G-타입 (8개)
  "GNIH": { img: GNIH_img, qr: GNIH_qr },
  "GNIL": { img: GNIL_img, qr: GNIL_qr },
  "GNSH": { img: GNSH_img, qr: GNSH_qr },
  "GNSL": { img: GNSL_img, qr: GNSL_qr },
  "GWIH": { img: GWIH_img, qr: GWIH_qr },
  "GWIL": { img: GWIL_img, qr: GWIL_qr },
  "GWSH": { img: GWSH_img, qr: GWSH_qr },
  "GWSL": { img: GWSL_img, qr: GWSL_qr },

  // E-타입 8개
  "ENIH": { img: ENIH_img, qr: ENIH_qr },
  "ENIL": { img: ENIL_img, qr: ENIL_qr },
  "ENSH": { img: ENSH_img, qr: ENSH_qr },
  "ENSL": { img: ENSL_img, qr: ENSL_qr },
  "EWIH": { img: EWIH_img, qr: EWIH_qr },
  "EWIL": { img: EWIL_img, qr: EWIL_qr },
  "EWSH": { img: EWSH_img, qr: EWSH_qr },
  "EWSL": { img: EWSL_img, qr: EWSL_qr },
  
  // (필수) 폴백용 기본값
  "default": { img: EWSH_img , qr: EWSH_qr }
};
type FbtiType = keyof typeof fbtiMap;



const Results = () => {
  useDisableBack(true); 

  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || "사용자";

  const fbtiType = (location.state?.fbtiType || "default") as FbtiType;
  const result = fbtiMap[fbtiType] || fbtiMap["default"];


  useEffect(() => {
    if (!location.state?.userName) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);

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
                    src={result.img} 
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
                    src={result.qr} 
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
            onClick={() => navigate("/", {replace: true})}
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
