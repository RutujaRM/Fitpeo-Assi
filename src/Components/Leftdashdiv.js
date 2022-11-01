import "./MainDashboard.css";

const Leftdashdiv = (_) => {
  return (
    <>
      {/* First div*/}
      <div className="flex first-div">
        <div className="revenue-div flex">
          <img
            src="data:image/jpeg;base64,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"
            alt="not display"
          />
          <div className="price-div">
            <span className="gray">Revenue </span> <br />
            <span className="span-dark">$ 21,456</span>
          </div>
          <button className="color-green">+2.65%</button>
        </div>

        <div className="revenue-div flex">
          <img
            src="data:image/jpeg;base64,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"
            alt="not display"
          />
          <div className="price-div">
            <span className="gray">Orders </span> <br />
            <span className="span-dark">5,643</span>
          </div>
          <button className="color-green red">+2.65%</button>
        </div>

        <div className="revenue-div flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gM_6CwDUWEEamq3GKzbW_MsEB2bMT2Eu_A&usqp=CAU"
            alt="not display"
          />
          <div className="price-div">
            <span className="gray">Customers </span> <br />
            <span className="span-dark">45,254</span>
          </div>
          <button className="color-green red">+2.65%</button>
        </div>
      </div>

      {/* Second div Overview */}

      <div className="flex overview-div">
        <div className="month-overview">
          <h5>Overview</h5>
          <div className="price-div">
            <span className="gray">This Month </span> <br />
            <span className="span-dark">$21,568</span>
            <button className="color-green price-btn">+2.65%</button>
          </div>

          {/*Orders */}
          <div className="overview-collection">
            <div className="flex justify-content">
              <div>
                <span className="gray">Orders </span> <br />
                <span className="span-dark">5,643</span>
              </div>

              <div>
                <span className="gray">Sales </span> <br />
                <span className="span-dark">16,273</span>
              </div>
            </div>
            <hr className="hr" />

            {/*Orders Value */}
            <div className="flex justify-content">
              <div>
                <span className="gray">Orders Value </span> <br />
                <span className="span-dark">12.03%</span>
              </div>

              <div>
                <span className="gray">Customers </span> <br />
                <span className="span-dark">21,456</span>
              </div>
            </div>
            <hr className="hr" />

            {/*Income */}
            <div className="flex justify-content">
              <div>
                <span className="gray">Income </span> <br />
                <span className="span-dark">$35,652</span>
              </div>

              <div>
                <span className="gray">Expenses</span> <br />
                <span className="span-dark">$12,248</span>
              </div>
            </div>
            <hr className="hr"/>
          </div>
        </div>

        <div className="bar-graph">
          <h5>
            Sort By :<span className="gray align-end">Yearly</span>{" "}
          </h5>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1a50EORDvWy2HWxIG4Hts0TVGhTeplrBYQ&usqp=CAU"
            alt="not display"
          />
        </div>
      </div>

      {/* Third div Activities */}

      <div className="flex activities-div justify-content ">
        {/* user Activities */}
        <div className="user-activity">
          <h5>User Activity</h5>
          <div className="price-div">
            <span className="gray">This Month </span> <br />
            <span className="span-dark">16,554</span>
          </div>
          <img
            src="https://www.strunkmedia.com/wp-content/uploads/2015/12/bar_graph_trending_up.jpg "
            alt="not display"
          />
        </div>

        {/* Order status */}
        <div className="user-activity">
          <div className="flex">
            <h5>Order Status</h5>
            <span className="dot">...</span>
          </div>
          <img
            src="https://www.strunkmedia.com/wp-content/uploads/2015/12/bar_graph_trending_up.jpg "
            alt="not display"
          />
          <span className="gray justify-content ">Completed </span>
          <span className="gray justify-content">Pending </span>
          <span className="gray">Cancel </span>
        </div>

        {/* Top product */}
        <div className="user-activity">
          <div className="flex">
            <h5 className="top-product"> Product</h5>
            <span className="dot gray">Monthly</span>
          </div>
          <div className="revenue-div2 flex margin-right">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBslGxUWITEhJSkrLjouFx8zODMtNygtLi4BCgoKDQ0NFw8PFS0dHR0tKzcyKy8tKy0rKy0vKy0tKysrLSstLS03LSstKy0tNy8tKy0tKysrLSsrLSsrLTc3K//AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAgEBBQQHBQYHAAAAAAAAAQIRAwQFEiExUQZBYXETIjJCUpGhBxSBwdEjYnKCsfEWJTNDorLw/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwUEBv/EACQRAQEBAQABBAEEAwAAAAAAAAABEQIDBBIxQZEhIlHRBRMy/9oADAMBAAIRAxEAPwD5mAAdFzFIpEopDhU0WiEWiozqikSUi4zqkWiEWi0VRRKKKjKqRaIRaLRVItERLRTOtIlxIiWhs6tFxIRcSkVojToZotDZ1aNEZxNEDOriWiIlopFaIpEItDQuJaM0WgZ02QymyWwERIhlshg0iQCwEp8+AAOS+rUikSikOFTLRBaKjOqKRCLRcRVItEFIuM6spElIqM6pFohFotnTRojNFopFaRLiREtDZ1oi4maNIsbOrRpEzRcWUitEWjNFpgzrSJaM0WmNFaItGSZaY0VomOyEwsacXYmybE2Aw2yGxtkNiVIQybGJTwAAByn1RopElIcKqKRJSKjOqRcSEUi4irKRCKRURVopEopFxnVItEIpFM6stGZcSmdaRZaMkaIpFaRLRnFlobOtUWjKLLQ0VqmUmZploaLGqKTMky0wjOxqmNMyTLTGmxopBZFhYyxdhZFhYDDbJbBslsRyDeGRYAbwoAByn1JlIgpBCUUiUUi0VY0SikVEVaKRCKRcZ1aKRCZSKRVo0hFtpJNtukkrbZmj1XZ96eMYpLdzSSuUqbl4J93kaczWHk69scLRdn8s6eRrEulb0/l3HcafYWmhzi8j6zf5I7EaNJI8t76qMWmxQ9nHjj5QijdJEgmNmcoRfOKfmkzDJs7Tz54o+cVuv6HIGmMOoz7Ag+OKbj4S9ZfM6vVaLLh9uPD4lxi/xPWA0mqfFPmnyYj141MtM7jaGx07nhVPm8fc/wCH9DpeKdcvyGTRMpMzTHYJsa2OzNMreBOLse8RYWPSxe8JsmwsNGHYmyWxNiPFWBFgB48UAAct9MBpiGAWhkoopFUikRFloqIq0yjNFouIq0UiEUimdi0djinwj5L+h1+KEpyjGEXKUmoxjFOUpSfJJLmczWYHp8k8GqeXTzxRjNwjFSnkfBrGpXUbTve4oOvNz45bUz0/Xm6nM/P8O70G1pRpZLnDlfvR/U7zDljNKUJKSfejwmk1kpLdq1JtpNScYyqlu17Uqvidlo9RODvHL1r3XjXrN0rbcen/ALuZrx5uev1eXyem65uPXIZ12g2pDLUZepPo+T8n+R2Bq8ykxklIZGiiRoApHUbc0Fp5oLiv9RLvXxHbDpNU+KfBrqgDxaZSkVrcPoss8fwydfw819DJMR40THZnY94ZY0THZnvDsCxdismxbwDFWJsmxNgeKsCLGBvHgAHLfRAAAApFIhFocKmi0QUmVGdWikyEUi4irRSZCPSfZ9sha7aenxTV48blqMq6wx8Un4OW6vxHevbLaU5vVkn29v2K7LvQ6SWvy4Xl1s8MsmHByljhu3GCvlOXe/Gut+G2fqfvWp1+v1uz8+qTjKU1ibxYtN3etKXG0lFJc+D4H3nXZseGEp5JKMYxlOTfdFK3J+CXeeS7PbNyZsW0dTmxTxYtpajJnxaea3c/oPRxhFz+By3XLd5q1fQ5fXkvXXurr8+Pnnn2z4fKdoQyafWavSafeluznijJwUs0YRTcnGSVxe7vJtdzZxNPcecuCTSjG0uKp314Nnc9ndn7Uz7X1C346bXftcmfLPHvrE5SW84prj7VJ9HzPS/4Teu0WDUyccOunByyOMVHFle86cor2W1XFdeTN/D5eZ1vf39vL6j0/fXGeP6+niozO72RtLK5LE4vIuvvRXW+nmcKOwdVHM8OWDxbtOU3xju9zi/ePR6PSwwx3YLzk/ak+rOtxdmx8/5Z7bl+XJGiUUWxUMlMYyUMlMpAHme0HDUeeODf1R1yZy9uZd7USrkkor8Dg2JpPhomOzNMdgWNLCyLCwLF2FkWDkAxVismxNgeKsCLAR48sAAc13wAAAMpEDQQLRSJQykVaGmQi0XEVaPo32JY09dq5e8tJuryeWN/9UfNJZEvPofRPsM1X+YaqMuG9pVS8si/VGfm6/ZY09Pzf9kr7Lk0kJpxnFSUnFuLVptO02+/ikY6/NHDCWSe81FezGLlOcu6MUubbpfidgZSxrm/ryOa6rw/Zzs/rIZdbrdZOOPVbQyRlKGKpS0+CCrHhUuVpc5dfKy9p7RxaWP3fTrenFNcW5Rx+bfN+H9ie0Haj0l4tJL1HwlnXOa/c6Lx/ueYR0fT+j393k/H9uL6z/I5vHh/P9NJzlJuUm5SfFt82IkaZ03Ft1SZRA0BLGiUMCUcfXalY4cPalwj4eJGr18MfD2p/Cu7zOnyZXOTlJ22XzNT11jr9c/2n8q/Mws0179f+VfmcdMjr5rfiftjWwsiwsSsaWFmdj3gLF2FkbwrAY0sW8RYrA8XvARYCGPOAAHOdwAAAAMQAFIpMhFIcKqsUpMQDTiGj0/2a7QWm2rhbdRzwnp7uqcqlH/lCK/E81QRbi1KLcZRacWuDTXJonrnZi+evbZX6x0WpWWF+8uEl0Yto5NzBnny3cOWXyg2eB7D9qfveCOVNLUY0oanHyTl8VfDLmvxXcep7QbQhPZe0JxdSjotVcfei/RSS+p4PbZ1ldC9T2+6Pgmj1+XDW5Ol3xfGPy/Q7nTdoY/7uNr96D3l8medA7stj5frmX5eyw7V08+WWK8JXD+pyo5oPlOD8pJngxple5F8U/l770kV70fmjOWswx55ca/mVniIyNIyH7k3xvVZds4Y+zvTfgqXzZwdRtbLPgv2cekfa+Z08ZGkZFSovLkqRpGRxVIc8qim/l4sudM7xrDWzvI/CkYWQ5W23zYWY27deuc5MaWOzPeHYaMXvD3jOwsNGNN4W8RYWGjF2KybFvAeKsZnYwGOiAAOe7AAAAAAAACkyRgFIZKZSKSBFCBLmbI2pn0WaOfBKpLhKL4wyQ74yXej6Pm7UafXbN1Txy9HmWHdyYJP1421FtfFHjz+Z8sFy4rg1ya5kdcS2X+GnPk6nN5n27YDg4ta1wmrXVczlQzwlykvJ8Geydyub14uufpoAAUzMqMiBgGqkaRkcSeaMPako+b4/IFqL5J+cuH0HOoV8dv053pElbZxcuZyfh3Ixc2+bsLHetPnxyfq0TCyLGmJWKGTYrDSxYWSOx6MOwFYBowxCsVi0YoCbANPHTgAHhdQAAAAAAAAAAAxpkjQBaYyUxplJsMQwBKWiGjQTQBKnJcm15Mf3rKvff0YmhKLfBIP1+jyX5hvW5fj+i/QUfT5fflXW2l9DbHpkuMuL6dxyEypzb81F65n/MiNPpoQ485fE+ZyDNMdmsknww623aux2RY7HqcWBIWPSxdhZNhY9LFWOyLCw0sXYrJsLDRirCybCw08OwJsA0Y6wAA8bogAAAAAAAAAAAAAAaKTIGAWmMhMpFJsMQxoEhQ6lpVyJTKKiaux2ZpjTK1FjQLJTGPSxVjsgY9LF2FkWOx6WLsLJsLGWKsLIsaYFirCybFYHi7CybFYDFWBFjFoxwAADzPaAAAAAAAAAAAAAAAAAAGUhAEBooAKTQOxgNBjEA4VMYAUR2OwAEmgABkBgAAAADIAAAAIAEYAAAP/2Q=="
              alt="not display"
            />
            <div className="price-div">
              <span className="gray">polo blue shirt </span> <br />
              <span className="span-dark">$25.4</span>
            </div>
            <button className="btn">3.82K</button>
          </div>

          <div className="revenue-div2 flex margin-top ">
            <img
              src="data:image/jpeg;base64,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"
              alt="not display"
            />
            <div className="price-div">
              <span className="gray">Hoodle to Men </span> <br />
              <span className="span-dark">$24.5</span>
            </div>
            <button className="btn">3.14K</button>
          </div>

          <div className="revenue-div2 flex margin-top">
            <img
              src="data:image/jpeg;base64,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"
              alt="not display"
            />
            <div className="price-div">
              <span className="gray">Red color Cap</span> <br />
              <span className="span-dark">$22.5</span>
            </div>
            <button className="btn">2.84K</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftdashdiv;
