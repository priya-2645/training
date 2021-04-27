import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';

import { Table, Modal, Button, Select,Input,Form,Checkbox,notification } from 'antd';


function App() {
  const [data, setData] = useState([]);
  
    const [searchData, setSearchData] = useState([]);
    const [userId,setUserId]=useState("");
    const [Id,setId]=useState("");
    const [body,setBody]=useState("");
    const [title,setTitle]=useState("");
  const [Visible, setVisible] = useState(false)
  const showModal = () => {
    
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);    
    setData(data.concat({userId,Id,body,title}))
};
const handleCancel = () => {
    setVisible(false);
};
useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(resp => resp.json())
        .then(resp => {
            setData(resp);
            setSearchData(resp);
          
        }).catch(() => notification.error({
            message: 'Failed',
        }))
}, []);

  
  // const [product, setProduct] = useState([]);
  // const [productName, setProductName] = useState('');
  // const [price, setPrice] = useState('');
  // const [id, setId] = useState('');
   //const [title1,setTitle1] = useState('');
  // const [onClick, updateMyProduct] = useState([]);
   //const [editId, setEditId] = useState(null);

  // const addProduct = () => {
  //   if (editId !== null && editId !== '' && editId !== undefined ) {
  //     product[editId].productName =  productName;
  //     product[editId].price =  price;
      
  //     product[editId].id =  id;
  //     handleReset();
  //   } else {
  //     setProduct(product.concat({ productName, price, id }));
  //     handleReset();
  //   }
  // };
  // const handleReset = ()=>{
  //   setVisible(false);
  //   setProductName('');
  //   setPrice('');
  //   setId('');
  //   setEditId('');
  // }
  // const deleteRow = (idx) => {
  //   setProduct(product.filter((x, i) => i !== idx));
  // };
   //const editRow = (record,idx) => {
    //console.log('dfasfidf come heresd',idx)
      //setTitle1('Edit product');
    //setVisible(true);
    //const { body, title, id } = record;
   //setEditId(idx);
  //  setProductName(productName);
   //setBody(body);
   //setTitle(title);
   //setId(id);
  //};


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  
  
    const onFinish = (product) => {
      console.log('Success:', product);
    
    };
  
    const onFinishFailed = (errorInfo ) => {
      console.log('Failed:', errorInfo);
    };
  
  // const columns = [
  //   {
  //     title: 'Product Name',
  //     dataIndex: 'productName',
  //     key: 'name',
  //     render: (text) => <h4>{text}</h4>,
  //   },
  //   {
  //     title: 'price',
  //     dataIndex: 'price',
  //     key: 'price',
  //     render: (text) => <h4>{text}</h4>
  //   },
  //   {
  //     title: 'Id',
  //     dataIndex: 'id',
  //     key: 'id',
  //     render: (text) => <h4>{text}</h4>
  //   },
    
  //   {
  //     title: 'Action',
  //     dataIndex: 'delete',
  //     key: 'delete',
  //     render: (text, record, idx) => (
  //       <span>
  //         <button onClick={() => editRow(record,idx)}>
  //           edit
  //         </button>
  //       <button onClick={() => deleteRow(idx)}>
  //           Remove
  //         </button>

  //       </span>
  //     ),
  //   },
  // ];
 
  // return (
  //   <div className="App">
	// 			<Table addProduct={this.addProduct} />
	// 			<table border='1px' cellPadding='20%' padding='20px'>
	// 				<thead>
	// 					<tr>
	// 						<th>s.no</th>
	// 						<th>Name</th>
	// 						<th>Actions</th>
	// 					</tr>
	// 				</thead>
	// 				<tbody>
	// 					{this.state.people.map((person) => {
	// 						return (
	// 							<tr key={person}>
	// 								<th>{person.id}</th>
	// 								<td>{person.name}</td>
	// 								<td>
	// 									<button onClick={this.deletePerson(person)}>
	// 										Remove
  //                   </button>
	// 									<button onClick={this.editPerson(person)}>
	// 										edit
  //                   </button>
	// 								</td>
	// 							</tr>
	// 						);
	// 					})}
	// 				</tbody>
	// 			</table>
	// 		</div>
  //     );
  //   }
  const Column = [
    {
        title: 'UserId',
        dataIndex: 'userId',
    },
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Title',
        dataIndex: 'title'
    },
    {
        title: 'Body',
        dataIndex: 'body'
    }
];
const onChange = (value) => {
  value = value.toString().toLowerCase();
  if (!value) {
      setData(searchData);
  } else {
      const setFilterDatas = searchData.filter((res) => res['userId'].toString().toLowerCase().includes(value));
      setData(setFilterDatas);
      
  }
}
const inputChanges = (event) => {
  let { value, name } = event.target;
  if (name === 'userId') {
      setUserId(value);
  }
  if (name === 'Id') {
      setId(value);
  }
  if (name === 'body') {
      setBody(value);
  }
  if (name === 'title') {
      setTitle(value);
  }
}
const handleChange = (event) => {
  let { value } = event.target;
  value = value.toString().toLowerCase();
  if (!value) {
      setData(searchData);
  } else {
      const filteredData = searchData.filter((res) => 
          res['title'].toString().toLowerCase().includes(value))
      setData(filteredData);
  }
}
return (
  <div className="App">
              <Button type="primary" onClick={showModal}>
          Open Modal
</Button>
<input type="text" placeholder="Search" onChange={handleChange} />
      <Table dataSource={data} columns={Column} />
      <Modal title="Add Data" visible={Visible} onOk={handleOk} onCancel={handleCancel}>
         <input type="text" name="userId" placeholder="User ID" onChange = {inputChanges} /><br/>
         <input type="text" name="Id" placeholder="Id" onChange = {inputChanges} /><br/>
         <input type="text" name="title" placeholder="Title" onChange = {inputChanges}/><br/>
         <input type="text" name="body" placeholder="Content" onChange = {inputChanges} /><br/>
      </Modal>
  </div>
)
}
export default App;

  
  // export default App;
    
     