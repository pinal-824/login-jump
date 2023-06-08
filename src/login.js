
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
export const Login = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        email: "",
        pass: "",
    })
    const [information, setInformation] = useState(JSON.parse(localStorage.getItem("Information")) || []);
    const [logindata, setLoginData] = useState(JSON.parse(localStorage.getItem("logindata")) || []);
    function Info(e) {
        console.log(e.target);
        let { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }
    function Change(values) {
        setInformation([...information, student]);
        const studentEmail = information.find((item) => item.email === values.email);
        console.log("===================", studentEmail);
        const studentPass = information.find((item) => item?.pass === values?.pass);
        console.log("=====================", studentPass);
        if (!!studentEmail && !!studentPass) {
            window.alert('login')
            setLoginData([...logindata, student])
            localStorage.setItem("logindata", JSON.stringify([...logindata, student]));
            navigate('/')
        } else {
            window.alert('Back to Sign Up form')
            navigate('/login')
        }
    }
    console.log(student);
    return (
        <div>
            <h1>Login</h1>
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="pass"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    submit
                </Button>
            </Form>
        </div>
    )
}
export default Login