import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 100%;
    width: 200px;
    background-color: #444444;
    position: fixed!important; /*this allows it to slide over the content instead of moving it*/
    z-index: 1; /*similar to layers, higher z-index is on top*/
    overflow: auto;
    border: 1px solid #444444;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 #111111;
`;

export const NavLink = styled(Link)`
    padding: 8px 16px;
    float: left;
    width: 75%;
    background-color: inherit;
    border: none;
    color: #DDDDDD;
    font-family: "Georgia", Times, Serif;
    text-decoration: none;
    text-align: left;
    /*display: block;*/
    outline: 0;
    cursor: default;
    &.active {
        color: palegoldenrod;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
