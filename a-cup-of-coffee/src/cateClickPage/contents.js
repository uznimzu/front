import React from 'react';
import styled from "styled-components";
import { FaRegCommentDots } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import {useState} from "react";

const ContentWrapper = styled.div`
        flex: 1;
        `;
const CateButton = styled.div`
        display:inline-block;
        width:150px;
        height:70px;
        margin-right: 10px;
        border-radius: 15px;
        text-align:center;
        font-size:1.2em;
        background-color:gray;
        `

const CateWrapper = styled.div`
        display:flex;
        margin-right:auto;
        float:left;
        flex-direction:column;
        justify-content: center;
        `;

const Card=styled.div`
        display:inline-block;
        width:50%;
        margin:10px;
        margin-left:auto;
        padding:10px;
        background-color: gray;
        justify-content: flex-end;
        border-radius: 15px;
        `;

const CardWrapper = styled.div`
        display:flex;
        flex-direction:column;
        `;

function Contents(){
    const dummyData = [
        { 
            id:1,
            cate:"share",
            title: "2.8로 삼성 합격 썰 푼다.",
            comment:"50", 
            good:"69", 
            bad:"15",
            content:" 나도 이렇게 될줄 몰랐는데 우선 스펙을 적어보면, 학점 2.8/4.5이긴한데 기사 자격증 보유하고 있음. 그리고 IPP였나 현장실습이었나...그거 인턴 1번 해봤고, 학부연구생도 했음.또, GSAT 진짜 개잘봤음. 아마 이때 내 운이 다 작용하지 않았나.. ...더보기"
        },

        { 
            id:2, 
            cate:"share",
            comment:"50", 
            good:"69", 
            bad:"15",
            title: "네이버 FE직군 스펙 공유",
            content:"학점 : 3.8 / 4.5 전공: 소프트웨어 활동: 우테코, 42서울 수료 단기현장실습 -> 앱 개발 참빛설계학기 -> 웹 개발 1일 1백준 -> 깃허브 연동 ..... 더보기"
        },

        { 
            id:3, 
            cate:"share",
            comment:"50", 
            good:"69", 
            bad:"15",
            title: "토스 데이터분석 직군.", 
            content:"입사 1년차 된 .. 슈퍼..주니어입니다.1 년 됐다고 벌써 기억이 가물가물가물치...더보기"
        },

        { 
            id:4, 
            cate:"share",
            comment:"15", 
            good:"2", 
            bad:"0",
            title: "스펙과 질문 받아요.", 
            content:"ㅈㄱㄴ!! 금융IT쪽 입니다"
        },

        { 
            id:5, 
            cate:"share",
            comment:"2", 
            good:"6", 
            bad:"5",
            title: "짬짜면 같은 인생.", 
            content:"주력 언어가 없음 인생이란 대체 뭘까 .. 그래도 데이터 분석/리서치 관련 궁금하신 거 있으신 분 질문 ㄱㄱ"
        },

        { 
            id:6, 
            cate:"share",
            comment:"0", 
            good:"0", 
            bad:"0",
            title: "멋사 해커톤", 
            content:"내가 만든 건 왤케 구리지/?"
        },

        { 
            id:7, 
            cate:"share",
            comment:"5", 
            good:"9", 
            bad:"1",
            title: "올리브영!!", 
            content:"이번 달에 빅 세일 하나?.."
        }
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;    
    const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
    return(
        <ContentWrapper>
            <CateWrapper>
            <h1>커피 한 잔 카테고리</h1>
                <div className="nav1" style={{display:"flex"}}> {/* jsx 땜시 바깥에 한 번, 그리고 스타일 땜시 안에 한 번! 2번 해야 하는 거 잊지 않기 */}
                    <div className="share">
                        <CateButton>
                            선배님들 스펙 및 자료공유
                        </CateButton>
                    </div>
                    <div className="chat">
                        <CateButton>
                            현직자들과 커피챗
                        </CateButton>
                    
                    </div>
                </div>

                <div className="nav2" style={{display:"flex"}}>
                    <div className="question">
                        <CateButton>
                            취업 관련 질문
                        </CateButton>
                    </div>
                    <div className="review">
                        <CateButton>
                            부트캠프/클래스 수강 후기
                        </CateButton>
                    </div>
                </div>

                <div className="nav3" style={{display:"flex"}}>
                    <div className="concern">
                        <CateButton>
                            이직/이력서 고민
                        </CateButton>
                    </div>
                    <div className="degree">
                        <CateButton>
                            대학원고민
                        </CateButton>
                    </div>
                </div>
        </CateWrapper>
       
        
            <CardWrapper>
                <h1>선배님들의 스펙 및 자료공유</h1>
                {currentItems.map((item) => (
                    <Card key={item.id}>
                        <b><h2>{item.title}</h2></b>
                        <FaRegCommentDots />{item.comment} 
                        <AiFillLike /> {item.good}
                       <AiFillDislike /> {item.bad}
                        <br />
                        <br />
                        {item.content}
                    </Card>   
                    
                ))}


            </CardWrapper> 
        </ContentWrapper>
    
    )

}
export default Contents;
