import styled from 'styled-components';


const StyledTitle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    width: 100%;
    height: 40px;
`

const StyledText = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;

    width: 280px;
    height: 40px;

    h1{
        margin: 0px;
        font-family: 'Gotham Light', sans-serif;
        font-size: clamp(25px, 7vw, 30px);
        font-weight: 600;
        color: white;
    }
`
const StyledLine = styled.div`
    height: 1px;
    width: calc((100vw - 290px)/2);
    background-color: #515152;
    margin: 17px 0px;
`

const Title = (props) => {
    return (
        <StyledTitle>
           <StyledLine/>
           <StyledText>
               <h1>{props.name}</h1>
           </StyledText>  
           <StyledLine/>
        </StyledTitle>
            
    );
}

export default Title;