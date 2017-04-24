import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SiteNav from 'components/SiteNav'
import NavBar from 'components/NavBar'


class Header extends Component{
    componentDidMount(){

    }

    render(){
        let navContent = [
            {text:"首页",body:"home",icon:"home-icon"},
            {text:"用户管理",body:"user",icon:"user-icon"},
            {text:"角色管理",body:"role",icon:"role-icon"},
            {text:"权限管理",body:"permission",icon:"permission-icon",sub:["权限划分","权限分配"]},
            {text:"日志管理",body:"log",icon:"log-icon",sub:["系统日志","积分日志"]},
            {text:"部门管理",body:"department",icon:"department-icon",sub:["成员管理","岗位管理","部门级别管理","下级部门管理"]},
            {text:"设备管理",body:"device",icon:"device-icon",sub:["垃圾桶管理","积分兑换机管理","广告机管理"]},
            {text:"广告管理",body:"advertise",icon:"advertise-icon",sub:["设备投放分组","广告内容管理","广告发布管理","设备投放监控"]},
            {text:"商家管理",body:"business",icon:"business-icon"},
            {text:"微站管理",body:"station",icon:"station-icon"},
            {text:"客服异常处理",body:"service",icon:"service-icon"},
            {text:"查询统计",body:"statistics",icon:"statistics-icon",sub:["垃圾分类查询","按日期统计"]},
            {text:"接收系统提醒",body:"notice",icon:"notice-icon"}
        ]
        return(
            <div className="header clearfix">
                <SiteNav content={{pageTitle:"垃圾智能分类系统"}}/>
                <NavBar content={navContent}/>
            </div>
        )
    }
}

export default Header