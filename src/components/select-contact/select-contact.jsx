import { useEffect, useState } from "react";
import Taro from '@tarojs/taro';
import { View, Text, Input, Image } from "@tarojs/components";
import { useDebouncedCallback } from "use-debounce";
import styles from './select-contact.module.less';
import CheckboxChecked from '../../static/images/checkbox-checked.png';
import CheckboxUnChecked from '../../static/images/checkbox-unchecked.png';
import withPositionFixed from "../withPositionFixed";

const fetchUser = async nickName => {
  Taro.showToast({
    title: '查询失败',
    icon: 'none',
  });
  return [];
};

function SelectContact(props) {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [chooseList, setChooseList] = useState([]);
  const [chooseListInfo, setChooseListInfo] = useState([]);
  const [height, setHeight] = useState('0px');

  const { visible = false, onCancel, onOk, disabled = [], title = '选择联系人' } = props;

  const debounced = useDebouncedCallback(
    // function
    e => {
      const { value } = e.detail;
      setName(value);
      if (value.length > 0) {
        fetchUser(value).then(res => {
          setList(res ?? []);
        });
      } else if (value.length === 0) {
        setList([]);
      }
    },
    props?.delay ?? 200
  );

  const handeChoose = (e, data) => {
    if (disabled.includes(data.partyId)) return;
    const value = data.partyId;
    if (chooseList.includes(value)) {
      handleDel(value);
    } else {
      setChooseList(old => old.concat(value));
      setChooseListInfo(old => old.concat(data))
    }
  }

  const handleDel = (id) => {
    setChooseList(old => old.filter(item => item !== id));
    setChooseListInfo(old => old.filter(item => item.partyId !== id))
  }

  const handleCancel = () => {
    onCancel && onCancel();
    clearState();
  }

  const handleOk = () => {
    onOk && onOk(chooseList, chooseListInfo);
    clearState();
  }

  const clearState = () => {
    setName('');
    setList([]);
    setChooseList([]);
    setChooseListInfo([]);
  }

  useEffect(() => {
    if (visible) {
      Taro.hideTabBar();

      const systemInfo = Taro.getSystemInfoSync();
      Taro.nextTick(() => {
        // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
        setHeight(`${systemInfo.windowHeight}px`);
      });
    } else {
      Taro.showTabBar();
    }

  }, [visible]);


  return (
    <View className={`${styles.selectContact} ${visible ? styles.show : ''}`} style={{ height }} catchMove>
      <View className={styles.header}>
        <Text className={styles.close} onClick={handleCancel}>✕</Text>
        <Text className={styles.title}>{title}</Text>
        <Text></Text>
      </View>
      <View className={styles.searchWrap}>
        <Input
          value={name}
          placeholder='搜索'
          confirmType='search'
          className={styles.searchInput}
          onInput={debounced}
        />
      </View>
      <View className={styles.list} catchMove>
        {
          list.map(item => (
            <View className={styles.listItem} key={item.partyId} hoverClass='tap-default-style'>
              <View
                className={`${styles.checkListCheckBox} ${disabled.includes(item.partyId) ? styles.disabled : ''}`}
                onClick={(e) => handeChoose(e, item)}
              >
                <Image className={styles.CheckboxIcon} src={chooseList.includes(item.partyId) ? CheckboxChecked : CheckboxUnChecked} />
                <Image className={styles.avatar} src={item.avatar.substring(0, item.avatar.length - 1) + '100'} />
                <Text className={styles.name}>{item.nickName}</Text>
              </View>
            </View>
          ))
        }
      </View>
      {
        chooseList.length ? (
          <View className={styles.chooseListWrap}>
            <View className={styles.chooseList}>
              {
                chooseListInfo.map(item => (
                  <Image
                    className={styles.chooseItem}
                    key={item.partyId}
                    src={item.avatar}
                    onClick={() => handleDel(item.partyId)}
                  />
                ))
              }
            </View>
            <Text className={styles.ok} onClick={handleOk}>确定({chooseList.length})</Text>
          </View>
        ) : null
      }
    </View>
  );
}

export default withPositionFixed(SelectContact)
