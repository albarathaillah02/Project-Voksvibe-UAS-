import { memo, useState } from "react";
import PropTypes from "prop-types";

const Email1 = memo(({ className = "", property1 = "Default" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    /* Gunakan className bawaan Locofy agar posisi label asli tidak berantakan */
    <div className={className} style={{ position: 'relative', width: '100%' }}>
      
      {/* Bagian <div>Password</div> yang manual saya hapus di sini 
          supaya tidak double dengan label dari desain Figma kamu 
      */}

      <div style={{ position: 'relative', width: '100%' }}>
        <input
          /* Menyesuaikan style input agar seragam dengan desain Login kamu */
          className="self-stretch h-[51px] rounded-[5px] bg-[#fff] border-[#666] border-solid border p-[10px] w-full"
          placeholder="Masukkan password"
          type={showPassword ? "text" : "password"}
          style={{ outline: 'none' }}
        />

        {/* Tombol mata diletakkan absolut tepat di dalam kotak input */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: 'flex',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          {/* Kamu bisa ganti teks 👁️ dengan <img src="/icon-eye.svg" /> jika ada filenya */}
          <span style={{ fontSize: '18px' }}>{showPassword ? "👁️‍🗨️" : "👁️"}</span>
        </button>
      </div>
    </div>
  );
});

Email1.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.string,
};

export default Email1;