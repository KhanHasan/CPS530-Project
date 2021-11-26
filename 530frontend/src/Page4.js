const Page4 = () => {
    const mystyle = {
        color: "black",
        paddingLeft: "20%",
        paddingRight: "20%"
      };
      const backgroundImg = {
        width: "100%"
      };
      const imgstyle = {
        width: "50%",
        float: 'right'
      };
      const backGround = {
        backgroundColor: "#ADD8E6",
        textAlign: "left"

        };

        const left = {
            float: 'left'
        };
        const right = {
            float: 'right'
        };



    return(
        <div style={backGround}>
        <div>
        <img style={backgroundImg}
        src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
        <header className="titleStyle">Toronto Maple Leafs</header>

        </div>

        <div style={mystyle}>
            <p>
            The actual page that is the result of step #3. Again up to you. This is your 
            actual demo website. Don't forget to mention the URL/link that goes directly 
            to the page here. 
            </p>
            <br /> 


            <div>
            <div style={left}>
            <h3>Summary</h3>
            <p>
            The Toronto Maple Leafs are a professional ice hockey team based in Toronto. 
            They compete in the National Hockey League as a member of the Atlantic 
            Division in the Eastern Conference. The club is owned by Maple Leaf Sports 
            and Entertainment, a company that owns several professional sports teams in
            the city.
            </p>
            </div>
            <div>
            <img style={imgstyle}
        src="https://www.scotiabankarena.com/assets/img/LFS_SBA_WEB_880x500-de5e68d0a1.png" />
            </div>
            </div>



            <br />
            <h3>Stanley Cups</h3>
            <p>
            13 (1917–18, 1921–22, 1931–32, 1941–42, 1944–45, 1946–47, 1947–48, 1948–49, 1950–51, 1961–62, 1962–63, 1963–64, 1966–67)
            </p>
        
           

            <br />
            <img style={imgstyle}
        src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTc5NjIyMTI1MzYxOTY0MTY5/usatsi_14176253_168390270_lowres-1.jpg" />
           
            <h3>Stadium</h3>
            <p>
                Scotiabank Arena
            </p>


           
            <br />
            <h3>Team</h3>
            
            <h6>Forwards</h6>
            <img style={imgstyle}
        src="https://mapleleafshotstove.com/wp-content/uploads/2019/12/toronto-maple-leafs-john-tavares-william-nylande.jpg" />
           
            <p>Bunting ----- Matthews ----- Marner</p>
            <p>Kerfoot -----  Tavares ----- Nylander</p>
            <p>Ritchie -----   Kampf  ----- Kase</p>
            
            <p>Spezza  ----- Engvall ----- Simmonds</p>
            <br />

           
            <h6>Defense</h6>
            <img style={imgstyle}
        src="https://www.teahub.io/photos/full/355-3554501_toronto-maple-leafs-2019.jpg" />
           
            <p>Rielly ----- Brodie</p>
            <p>Muzzin -----  Holl</p>
            <p>Sandin -----   Liljegren</p>
            
            <br />
            
            <h6>Goalies</h6>
            <p>Campbell</p>
            <p>Woll</p>
            <br />
            
            <h6>Coach: Shelon Keefe</h6>
            <h6>GM: Kyle Dubas</h6>


        </div>
        </div>
       
    );
}

export default Page4;