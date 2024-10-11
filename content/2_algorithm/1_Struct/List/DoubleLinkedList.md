+++
tags = ["Cxx","List"]
title = "双向节点链表"
date = 2023-09-14T21:30:02+08:00
draft = false
weight = 3
+++

## 节点模板类定义

```c++
    template <typename Node>
    class IListNode
    {
        Node *mNext;
        Node *mPrev;

    public:
        inline IListNode()
            : mNext(nullptr), mPrev(nullptr)
        {
        }
        // 初始化节点
        inline void init() { mNext = nullptr, mPrev = nullptr; }
        // 获取后继节点
        inline Node *getNext() { return mNext; }
        // 获取前驱节点
        inline Node *getPrev() { return mPrev; };
        // 设置后继节点
        inline void setNext(Node *next) { mNext = next; }
        // 设置前驱节点
        inline void setPrev(Node *prev) { mPrev = prev; };
        // 设置节点
        inline void setNode(Node *next, Node *prev) { mNext = next, mPrev = prev; }
    };
```

## 链表模板类定义


```c++
    template <typename Node>
    class IList
    {
        IListNode<Node> mRoot; // 链表根节点
        uint mCount;           // 节点计数
    public:
        // 链表初始化
        inline IList()
            : mCount(0)
        {
            mRoot.setNode((Node *)&mRoot, (Node *)&mRoot);
        }
        // 初始链表
        inline void initList() { mCount = 0, mRoot.setNode((Node *)&mRoot, (Node *)&mRoot); }
        // 获取根，只读
        inline Node *getRoot() { return (Node *)&mRoot; }
        // 获取节点计数
        inline uint getCount() const { return mCount; }
        // 获取第一个节点
        inline Node *getEntry()
        {
            Node *ret = mRoot.getNext();
           /* if (ret == &mRoot)
                ret = nullptr;*/
            return ret;
        }
        inline Node *front() { return getEntry(); }
        // 获取最后一个节点
        inline Node *getTail()
        {
            Node *ret = mRoot.getPrev();
             /* if (ret == &mRoot)
                ret = nullptr;*/
            return ret;
        }
        inline Node *back() { return getTail(); }

        // 从头部插入
        inline void insertEntry(Node *node)
        {
            Node *head = mRoot.getNext();
            node->setPrev((Node *)&mRoot);
            node->setNext(head);
            head->setPrev(node);
            mRoot.setNext(node);
            ++mCount;
        }
        // 从尾部插入
        inline void insertTail(Node *node)
        {
            Node *tail = mRoot.getPrev();
            node->setPrev(tail);
            node->setNext((Node *)&mRoot);
            tail->setNext(node);
            mRoot.setPrev(node);
            ++mCount;
        }
        // 从iter前面插入
        inline void insert(Node *iter, Node *node)
        {
            iter->getPrev()->setNext(node);
            node->setPrev(iter->getPrev());
            node->setNext(iter);
            iter->setPrev(node);
            ++mCount;
        }
        // 移除节点
        inline Node *remove(Node *entry)
        {
            // 根节点并不能移除
            if ((Node *)&mRoot == entry)
                return nullptr;
            Node *prev = entry->getPrev();
            Node *next = entry->getNext();
            prev->setNext(next);
            next->setPrev(prev);

            entry->init();

            --mCount;
            return entry;
        }
        // 移除头部节点
        inline Node *removeEntry() { return remove(mRoot.getNext()); }
        // 移除尾部节点
        inline Node *removeTail() { return remove(mRoot.getPrev()); }
    };
```

