import React from 'react';
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const CateButton = styled.div`
        display:inline-block;
        width:150px;
        height:70px;
        margin-right: 10px;
        border-radius: 15px;
        text-align:center;
        font-size:1.2em;
        background-color: ${(props) => props.color || "lightgray"}; /* props로 선택됐을 땐 다른 색, 기본은 회색 구현하고 싶은데 일단 대기  */
    `;

const CateWrapper = styled.div`
        display:flex;
        margin-right:auto;
        float:left;
        flex-direction:column;
        justify-content: flex-start;
        `;

const Card=styled.div`
        display:inline-block;
        width:50%;
        margin:10px;
        margin-left:auto;
        padding:10px;
        background-color: yellowgreen;
        justify-content: flex-end;
        border-radius: 15px;
        `;

const CardWrapper = styled.div`
        display:flex;
        float:right;
        margin-left:auto;
        flex-direction:column;
        `;

const Writebtn = styled.div`
        margin-left:auto;
        border-radius: 15px;
        background-color: yellow;
        border-radius: 15px;
        `

const WritebtnWrapper = styled.div`
        display:flex;
        height:25px;
        
`
  
function CateClick(props) {
    const dummyData = [
        { 
            id:1, 
            title: "2.8로 삼성 합격 썰 푼다.",
            comment:"50", 
            good:"69", 
            bad:"15",
            content:" 나도 이렇게 될 줄 몰랐음 근데 어쩌다보니! 눈 떠보니~ 하루아침에 취업을 했더라~~ㅋㅋ"
        },

        { 
            id:2, 
            comment:"50", 
            good:"69", 
            bad:"15",
            title: "네이버 FE직군 스펙 공유",
            content:"학점은 ~이고, 전공은~임. 그리고 꿈은~"
        },

        { 
            id:3, 
            comment:"50", 
            good:"69", 
            bad:"15",
            title: "토스 데이터분석 직군.", 
            content:"입사 1년차 수퍼~주니어~~~ㅎㅎ"
        }
    ]

    
  return (
    <div>
        <CateWrapper>
            <div className="nav1" style={{display:"flex"}}> {/* jsx 땜시 바깥에 한 번, 그리고 스타일 땜시 안에 한 번! 2번 해야 하는 거 잊지 않기 */}
                <div className="share">
                    <CateButton color={props.lightgray}>
                        선배님들 스펙 및 자료공유
                    </CateButton>
                </div>
                <div className="chat">
                    <CateButton color={props.lightgray}>
                        현직자들과 커피챗
                    </CateButton>
                
                </div>
            </div>

            <div className="nav2" style={{display:"flex"}}>
                <div className="question">
                    <CateButton color={props.lightgray}>
                        취업 관련 질문
                    </CateButton>
                </div>
                <div className="review">
                    <CateButton color={props.lightgray}>
                        부트캠프/클래스 수강 후기
                    </CateButton>
                </div>
            </div>

            <div className="nav3" style={{display:"flex"}}>
                <div className="concern">
                    <CateButton color={props.lightgray}>
                        이직/이력서 고민
                    </CateButton>
                </div>
                <div className="degree">
                    <CateButton color={props.lightgray}>
                        대학원고민
                    </CateButton>
                </div>
            </div>
        </CateWrapper>

        <WritebtnWrapper>
            <Writebtn> 
                글 작성하기
            </Writebtn>
        </WritebtnWrapper>
        
        
        <div>
           
            <CardWrapper>
                {dummyData.map((item) => (
                    <Card key={item.id}>
                        <b>{item.title}</b>
                        <br />
                        <FaRegCommentDots />{item.comment} 
                        <AiFillLike /> {item.good}
                       <AiFillDislike /> {item.bad}
                        <br />
                        {item.content}
                    </Card>   
                    
                ))}
            </CardWrapper>
        </div>
    </div> 
 
  );
}

export default CateClick; 