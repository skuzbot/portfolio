const Footer = () => {
  return (
    <div>
      <div className='footer'>
        Contact Info
      </div>
      <style jsx>{`
        .footer {
          position: fixed;
          width: 100%;
          height 35px;
          background-color: #9e9e9e;
          border-top: 15px #bbb5c3 solid;
          border-bottom: 10px #bbb5c3 solid;
          bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default Footer;