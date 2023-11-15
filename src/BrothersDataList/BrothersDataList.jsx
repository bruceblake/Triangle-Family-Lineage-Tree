import React, { useEffect, useState } from 'react';
import './BrothersDataList.css';
import Tree from 'react-d3-tree';
import TreeNode from '../TreeNode.js';

function BrothersDataList() {
  var [brothersData, setBrothersData] = useState([]);
  var [familyTreeData, setFamilyTreeData] = useState([])
  const brotherMap = new Map ([]) //Brother Name : Brother ID
  useEffect(() => {
    const fetchData = async () => {


      const response = await fetch('./brothersdata.json');
      const data = await response.json();

        var processedData = [];
      //gets all of JSON data of all of the brothers
      for (const brother of data) {
       
        var brotherObject = {
            id: brother.id,
            parent_id: brother.parent_id,
            name: brother.name,
            children: brother.littleBrothers.map((littleBrother) => {
                return {name: littleBrother.name}
            })
        }

        processedData.push(brotherObject);
      }
      if(brothersData.length === 0){
        setBrothersData(processedData);
      }

    };

    fetchData();
  }, []);

  

  useEffect( () => {
    var familyData = [];
    const getDataTree = (items) => {
        if (items && items.length > 0) {
          const data = [];
          const map = {};
          items.map((item) => {
            const id = item.id; // custom id selector !!!
            if (!map.hasOwnProperty(id)) {
              // in case of duplicates
              map[id] = {
                ...item,
                children: [],
              };
            }
          });
          for (const id in map) {
            if (map.hasOwnProperty(id)) {
              let mappedElem = [];
              mappedElem = map[id];
              /// parentId : use custom id selector for parent
              if (
                mappedElem.parent_id &&
                typeof map[mappedElem.parent_id] !== "undefined"
              ) {
                map[mappedElem.parent_id].children.push(mappedElem);
              } else {
                data.push(mappedElem);
              }
            }
          }
          return data;
        }
        return [];
      };

    familyData = getDataTree(brothersData);
    setFamilyTreeData(familyData);
  }, [brothersData])

  return (
    <div>
        

        {familyTreeData.map((familyData) => {
            return(
                <div >
                   <h1>{familyData.name}'s Family</h1>
                    <div key={familyData.id} className="familyTree">
                    <Tree className="tree" data={familyData} orientation='vertical' pathFunc={'straight'} zoomable={false}
                     nodeSize={{x:200,y:200}} separation={{nonSiblings: 0.5, siblings: 1}} translate={{x:600,y:100}}/>
                    </div>
              
                </div>
            )
        } )}

    </div>
  );
}

export default BrothersDataList;
