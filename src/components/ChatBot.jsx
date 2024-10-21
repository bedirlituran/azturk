'use client';
import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai'; // Mesaj ikonu üçün react-icons kitabxanasını istifadə edirik

// Gündəlik müştəri suallarına cavab verən geniş cavab xəritəsi
const responseMap = {
  "salam": "Salam! Sizə necə kömək edə bilərəm?",
  "internet paketləriniz hansılardır": "Bizim müxtəlif sürətli internet paketlərimiz mövcuddur: 50 Mbps, 100 Mbps, və 200 Mbps sürətlərdə xidmət göstəririk.",
  "tv paketləriniz hansılardır": "Bizim TV paketlərimizdə 100-dən çox yerli və xarici kanal var. Ən populyar kanallarımız: İdman, Kino, Uşaq və Əyləncə.",
  "tv qiymətləri nə qədərdir": "TV xidmətinin aylıq abunə qiyməti 10 AZN-dən başlayır.",
  "internet qiymətləri nə qədərdir": "Internet paketlərimiz aylıq 25 AZN-dən başlayır. Sürətə görə qiymətlər dəyişir.",
  "kampaniyalarınız var mı": "Bəli! Hal-hazırda internet və TV paketini bir yerdə alana 3 ay pulsuz TV xidməti təqdim edirik.",
  "modem qiyməti nə qədərdir": "Modemi tamamilə pulsuz təqdim edirik!",
  "texniki dəstək necədir": "Texniki dəstək komandamız 7/24 fəaliyyət göstərir. Hər hansı bir problem yaranarsa, dərhal bizə müraciət edin.",
  "ödəmə necə həyata keçirilir": "Ödənişləri onlayn, mobil tətbiq və ya ofisimizə gələrək nağd şəkildə edə bilərsiniz.",
  "internet nə zaman aktivləşir": "Qeydiyyatdan sonra internet xidmətimiz 24 saat ərzində aktivləşdirilir.",
  "tv xidməti nə zaman aktivləşir": "TV xidmətimiz internetlə birgə aktivləşdirilir və dərhal istifadə edə bilərsiniz.",
  "ümumi məlumat": "Biz, yüksək keyfiyyətli internet və TV xidmətləri təklif edən bir şirkətik. Hədəfimiz müştərilərə ən yaxşı xidməti təqdim etməkdir.",
  "müştəri xidməti ilə necə əlaqə saxlaya bilərəm": "Müştəri xidmətimizlə əlaqə saxlamaq üçün bizə 012 345 67 89 nömrəsinə zəng edə və ya info@sirketimiz.com e-mail ünvanına yazışa bilərsiniz.",
  "fiber internet varmı": "Bəli, biz fiber optik internet xidməti təklif edirik, hansı ki, yüksək sürətli və sabit bağlantı təmin edir.",
  "ən sürətli internet paketiniz hansıdır": "Ən sürətli internet paketimiz 200 Mbps-dir. Əlavə məlumat üçün bizə müraciət edə bilərsiniz.",
  "tv xidmətində hansı kanallar var": "TV xidmətimizdə yerli və xarici kanallar, film, idman və uşaq kanalları daxildir.",
  "quraşdırma haqqı nə qədərdir": "Hal-hazırda quraşdırma pulsuzdur. Kampaniyadan faydalanın!",
  "abunəliyimi necə ləğv edə bilərəm": "Abunəliyi ləğv etmək üçün müştəri xidmətimizlə əlaqə saxlayın və lazımi dəstəyi alacaqsınız.",
  "kabel televiziyası var mı": "Bəli, kabel TV xidməti təqdim edirik və quraşdırma pulsuzdur.",
  "mobil tətbiq var mı": "Bəli, mobil tətbiqimiz vasitəsilə ödəniş edə, xidmətləri idarə edə bilərsiniz.",
  "sürət testi necə edə bilərəm": "Sürət testi üçün veb saytımızda mövcud olan sürət testi alətindən istifadə edə bilərsiniz.",
  "gecikmə problemi necə həll edilə bilər": "Gecikmə problemləri texniki dəstək tərəfindən dərhal araşdırılacaq və həll olunacaq.",
  "köhnə müştərilərə endirim varmı": "Köhnə müştərilərimizə xüsusi endirimlər və bonuslar təqdim edirik. Ətraflı məlumat üçün müştəri xidmətimizlə əlaqə saxlayın.",
  "tv xidməti başqa şəhərlərdə də mövcuddur mu": "Bəli, TV xidmətimiz bir çox şəhər və bölgədə mövcuddur. Daha ətraflı məlumat üçün bizə müraciət edin.",
  "müştəri nömrəsi necə alım": "Müştəri nömrənizi bizə zəng edərək və ya e-poçt vasitəsilə öyrənə bilərsiniz.",
  "tv xidmətini necə yenidən başlada bilərəm": "TV xidmətinizi yenidən başlatmaq üçün quraşdırma ustamızla əlaqə saxlayın və dərhal dəstək alın.",
  "paket dəyişiklikləri necə edilir": "Paketinizi dəyişdirmək üçün müştəri xidmətimizə zəng edə və ya onlayn olaraq dəyişiklik edə bilərsiniz.",
  "evdə neçə cihaz qoşula bilər": "Hər paketimiz fərqli cihaz limitləri ilə gəlir. Daha geniş məlumat üçün müştəri xidməti ilə əlaqə saxlayın."
};

const fallbackResponse = "Bu mövzu haqqında məlumatım yoxdur. Başqa bir sualınız varmı?";

// ChatBot komponenti
const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Chat botun açıq/bağlı vəziyyətini tutar

  // İstifadəçi mesajını işləyib cavab döndərən funksiya
  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      const lowerCaseInput = input.toLowerCase();
      const botResponse = Object.keys(responseMap).find(key =>
        lowerCaseInput.includes(key)
      ) ? responseMap[Object.keys(responseMap).find(key => lowerCaseInput.includes(key))] : fallbackResponse;

      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
      setInput("");
    }
  };

  return (
    <div>
      {/* Chat bot ikonunu ekleyirik */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1000
        }}
        onClick={() => setIsOpen(!isOpen)} // Tıklandığında chat botu aç/kapat
      >
        <AiOutlineMessage size={30} />
      </div>

      {/* Chat bot açıldığında görünür olacaq */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "20px",
            width: "300px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 999
          }}
        >
          <h2>ChatBot</h2>
          <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
            {messages.map((message, index) => (
              <div key={index} style={{ textAlign: message.sender === 'user' ? "right" : "left" }}>
                <strong>{message.sender === 'user' ? "Siz" : "Bot"}:</strong> {message.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Bir sual verin..."
            style={{ width: "80%", padding: "10px", marginRight: "5px" }}
          />
          <button onClick={handleSend} style={{ padding: "10px", width: "20%" }}>
            Göndər
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
