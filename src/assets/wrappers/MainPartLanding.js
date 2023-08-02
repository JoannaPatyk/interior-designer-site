import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        position: relative;
        height: 65vh;
    }

    h1 {
        padding: 2px;
        font-size: 2.8rem;
        font-weight: 900;
        color: var(--black);
        line-height: 3.8rem;
        text-align: left;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
    }

    .main-background {
        opacity: 0.8;
        background: var(--gradient);
    }

    .title-container h2 {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 3.8rem;
        letter-spacing: 0.15rem;
        font-family: var(--primary-fontFamily);
        text-align: left;
        text-transform: none;
        padding: 0;
        margin: 0;
    }

    .slide-1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    .title-container {
        width: 45%;
        height: 100%;
        padding-left: 8rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
        flex-direction: column;
    }

    .line {
        width: 260px;
        height: 3px;
        background-color: var(--primary-200);
    }
`;

export default Wrapper;
