import { memo } from "react";
import { Link } from "react-router-dom"; // Import Link untuk navigasi
import PropTypes from "prop-types";

const TidakPunyaAkunDaftarDisin = memo(({ className = "" }) => {
  return (
    <div className={className} style={{ fontSize: "14px", marginTop: "10px" }}>
      <span>Tidak punya akun? </span>
      {/* Mengubah teks menjadi Link yang menuju ke path /register */}
      <Link 
        to="/register" 
        style={{ 
          color: "#007bff", 
          textDecoration: "none", 
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Daftar disini
      </Link>
    </div>
  );
});

TidakPunyaAkunDaftarDisin.propTypes = {
  className: PropTypes.string,
};

export default TidakPunyaAkunDaftarDisin;
