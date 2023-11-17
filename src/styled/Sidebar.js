import styled from "styled-components";

const SideBarStyled = styled.div`
    background-color: #2d2b2b;
    height: 100vh;

    .logo{
        .small{
            width: 60px;
            height: 40px;
        }
        .large{
            width: 150px;
        }
        .left-arrow{
            left: 270px;
        }
        .right-arrow{
            left: 82px;
        }
    }

    .options{
        width: max-content;
        .category{
            width: 95%;
        cursor: pointer;
        .icon{
             height: 23px;
            width: 23px;
            color: #fff;
         }
        :hover{
            background-color: #686868;
            span{
                color: #fff !important;
            }
        }
    }
        
    }

    
`;

export default SideBarStyled