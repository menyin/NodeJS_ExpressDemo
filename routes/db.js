
/**
 *�������ݿ�����
 * ��ģ��ֻ�ᱻ����һ�Σ�һֱʹ����ͬ��ʵ��
 */
//�����������õ�ģ��
var settings = {db:'blog',host: '10.188.179.75'};
//�õ�db����
var Db=require("mongodb").Db;
//�õ����Ӷ���
var Connection=require("mongodb").Connection;
//�õ��������
var Server=require("mongodb").Server;
//�������Ӷ��󲢱�©����ӿ�
module.exports=new Db(settings.db,new Server(settings.host,27017,{}));


