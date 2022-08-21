import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

const LoginForm:React.FC= (props: any) => {
    const [form] = Form.useForm(); 
    let navigate=useNavigate()
    const [loading,setLoading]=useState<boolean>(false)
    const onFinish = (values: any) => {
        try {
			setLoading(true);
            form.validateFields().then(values=>{
                if(values.username=='admin'&&values.password=='123456'){
                    message.success("登录成功！");
                    navigate('/home');
                }else{
                    message.error("登录失败！");
                }
            })
		} finally {
			setLoading(false);
		}
    };
    const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
        message.error("登录失败！");
	};
	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
				style={{"marginRight":"15px"}}
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
				重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
