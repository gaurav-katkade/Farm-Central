import styled from "styled-components";
const Navbar =()=>{
    return(
        <Wrapper>
            <div className="navbar">
            <div className="logo"><p>Farm-Central</p></div>
            <div>
            <ul className="nav-list">
                <li>
                    Explore
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Cart
                </li>
                <li>
                    Profile
                </li>
            </ul>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    padding:1rem 1rem;
    .navbar{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .nav-list{
        display:flex;
        flex-wrap:nowrap;
        justify-content:space-evenly;
        gap:10px;
    }
`;
export default Navbar;
