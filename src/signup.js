import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        pass: "",
    })
    const [search, setSearch] = useState(JSON.parse(localStorage.getItem("Information")) || []);
    function Info(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value, id: Date.now() });
    }
    function Change(values) {
        console.log(values);
        setSearch([...search, values]);
        localStorage.setItem("Information", JSON.stringify([...search, values]));
        navigate('/login')
    }
    return (
        <div>
            <h1>Singup</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={Change}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email" onChange={(e) => Info(e)}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="pass" onChange={(e) => Info(e)}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit" >
                    submit
                </Button>
            </Form>
        </div>
    )
}
export default Signup;
