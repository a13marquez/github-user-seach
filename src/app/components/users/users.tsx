import Avatar from 'antd/lib/avatar/avatar'
import Layout, { Content, Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getIsFetching } from '../../features/messages/messagesSlice'
import { getUsers } from '../../features/users/usersSlice'
import { IUser } from '../../models/User.model'
import { GenericTable } from "../table/GenericTable";
import { Search } from '../search/search'

export const Users = () => {
  const [usersList, setUsersList] = useState([])
  const users: IUser[] = useSelector(getUsers)
  const isFetching = useSelector(getIsFetching)


  useEffect(() => {
    const u = updateUsersChildren(users)
    setUsersList(u);
  }, [users])

  const columns = [
    {
    title: 'Avatar',
    dataIndex: 'avatar',
      render: (avatar: string) => <Avatar src={avatar}/>
    },
    {
    title: 'Login',
    dataIndex: 'login',
    sorter: (a, b) => {
        if(a.login < b.login) return -1
        if(a.login > b.login) return 1
        return 0;
    },
    sortDirections: ['descend'],
    },
    {
    title: 'Type',
    dataIndex: 'type',
    sorter: (a, b) => {
        if(a.type < b.type) return -1
        if(a.type > b.type) return 1
        return 0;
    },
    sortDirections: ['descend'],
    }
  ]

  const updateUsersChildren = (users: IUser[]) => {
    return users.map((item: IUser, index: number) => ({
      key: index,
      avatar: item.avatar_url,
      login: item.login,
      type: item.type,
    }))
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} title="">
        <div className="inner-header">
          <h1 className="title">Users list</h1>
          <div className="search-bar">
            <Search />
          </div>
        </div>
      </Header>
      <Content>
        <GenericTable
          columns={columns}
          data={usersList}
          loading={isFetching} />
      </Content>
    </Layout>
  );
}
