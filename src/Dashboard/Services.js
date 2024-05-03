import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Services = () => {
  React.useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  React.useEffect(() => {
    const handleMouseEnter = (e) => {
      const label = e.currentTarget.querySelector('.label');
      if (label) {
        label.style.opacity = 1;
      }
    };

    const handleMouseLeave = (e) => {
      const label = e.currentTarget.querySelector('.label');
      if (label) {
        label.style.opacity = 0;
      }
    };

    document.querySelectorAll('.card').forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.card').forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  return (
    <>
   <div style={{ overflowY: "auto", maxHeight: "calc(95vh - 3cm)" }}>
  <div style={{ display: "flex", gap: "1cm", marginLeft: "5cm", width: "calc(75% + 2cm)", marginTop: "1cm" }}>
    <div style={{ position: "relative" }}>
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://images.freeimages.com/images/large-previews/148/priest-hands-1428227.jpg?fmt=webp&w=500" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: "0", left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
          <p><b>Baptism</b></p>
        </div>
      </Card>
    </div>
    <div style={{ position: "relative" }}>
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://linstant-m.tn//uploads/5429.png" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>Events</b></p>
        </div>
      </Card>
    </div>
    <div style={{ position: "relative" }}>
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://www.wellybox.com/wp-content/uploads/2021/07/Depositphotos_68349399_l-2015.jpg" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>Donations</b></p>
        </div>
      </Card>
    </div>
    <div style={{ position: "relative" }} className="card">
  <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
              <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
                <img src="https://img.freepik.com/free-photo/christian-life-crisis-prayer-god_1150-12941.jpg?t=st=1709026074~exp=1709029674~hmac=a1195a1d89270c866dbb96fc81e9f168f5473212096cff07f464c001e9a86264&w=900" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
              </CardContent>
              <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
              <p><b>Special Prayer</b></p>
              </div>
            </Card>
          </div>
  </div>

  <div style={{ display: "flex", gap: "1cm", marginLeft: "5cm", width: "calc(75% + 2cm)", marginTop: "1cm" }}>
  <div style={{ position: "relative" }} className="card">
            <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
              <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
                <img src="https://img.freepik.com/premium-photo/church-worship-concept-christian-worship-front-cross_191555-2283.jpg?w=900" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
              </CardContent>
              <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
              <p><b>Sunday Services</b></p>
              </div>
            </Card>
          </div>
    {/* <div style={{ position: "relative" }} className="card">
    <Card sx={{ width: 200, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>Appointmnets</b></p>
              </div>
      </Card>
    </div> */}
    <div style={{ position: "relative" }} className="card">
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://www.churchofjesuschrist.org/bc/content/ldsorg/church/news/2018/09/580-1268629-CWD_dbef992a-3cf9-4e8e-ba1b-3c59c7c1b293.jpg" alt="baptism" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>Teaching</b></p>
              </div>
      </Card>
    </div>
    <div style={{ position: "relative" }} className="card">
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg" alt="Other Reasons" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>For Other Reasons</b></p>
              </div>
      </Card>
    </div>
    <div style={{ position: "relative" }} className="card">
    <Card sx={{ width: 210, height: 200, cursor: "pointer", borderRadius: "15px", overflow: "hidden" }}>
        <CardContent style={{ padding: 0, height: "100%", display: "flex", alignItems: "stretch" }}>
          <img src="https://t4.ftcdn.net/jpg/01/26/10/59/360_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" alt="baptism" style={{ width: "60%", height: "80%", objectFit: "cover", borderRadius: "15px",marginLeft:"2cm",marginTop:"0.8cm" }} />
        </CardContent>
        <div className="label" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", textAlign: "center", padding: "8px 0", borderRadius: "0 0 15px 15px", transition: "opacity 0.3s", opacity: 0 }}>
        <p><b>Add New Service</b></p>
              </div>
      </Card>
    </div>
  </div>

  <div style={{ display: "flex", gap: "1cm", marginLeft: "5cm", width: "calc(75% + 2cm)", marginTop: "1cm" }}>
  
    
    
  </div><br/><br/>
</div>

    </>
  );
}

export default Services;
