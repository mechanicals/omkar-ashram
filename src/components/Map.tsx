import './Map.scss';

const Map = () => {
  return (
    <div className="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1021.3120374277383!2d78.14152!3d28.757252000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b718175c7162b%3A0x6adb56e400f1abdb!2sShri%20OmkarAshram%20DandiWada!5e1!3m2!1sen!2sus!4v1747073813240!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Dandi Omkar Ashram Location"
      />
    </div>
  );
};

export default Map; 