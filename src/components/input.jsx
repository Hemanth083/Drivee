
import { Flex, Space, Select, DatePicker, Button } from "antd"
import './input.css'

const Option = Select
const { RangePicker } = DatePicker

const Input = () => {
    return (
        <Flex align='center' justify='center' className="InputBar" >
            <Space size={70}>
                <Flex gap={20} vertical>
                    <p>Location</p>
                    <Select allowClear className="select" placeholder="Select Location">
                        <Option>BTM</Option>
                        <Option>BMW</Option>
                    </Select>
                </Flex>
                <Flex gap={20} vertical>
                    <p>Pick-Up</p>
                    <Select allowClear className="select" placeholder="Select Location">
                        <Option></Option>
                    </Select>
                </Flex>
                <Flex gap={20} vertical>
                    <p>Date</p>
                    <RangePicker size="middle"></RangePicker>
                </Flex>
                <Button size='middle' className="submitButton" type="text">Search</Button>

            </Space>
        </Flex>
    )
}
export default Input