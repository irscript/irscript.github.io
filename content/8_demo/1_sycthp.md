+++
tags = ["pthread","多线程异步池"]
categories = ["c/c++","多线程"]
title = "异步支持方案"
weight = 1
+++


## 功能示意图

![alt text](/images/sycthpool.png)

## 总体框架

线程池是一种可重用线程池，用于执行一系列的任务，而不需要创建和销毁新的线程。异步方案可采用线程池技术，可以将线程池的线程用于执行非阻塞任务，这些任务不需要等待当前线程完成。这种技术可以提高系统的并发性和性能。

线程池的总体框架由三部分组成：任务队列、线程池、任务调度器。

* 任务队列是线程池的核心组成部分，它用于存储和管理任务。任务队列的大小和类型决定了线程池的规模和性能。
* 线程池是任务队列的执行者，它用于执行任务队列中的任务。线程池的大小和类型决定了任务队列的大小和性能。
* 任务调度器是线程池的管理者，它用于控制任务的执行顺序和优先级。任务调度器可以根据任务的优先级和状态来安排线程池中的线程执行任务，从而提高任务的执行效率和并发性。

线程池的总体框架中，任务队列是核心组成部分，它直接决定了线程池的性能和规模。任务队列的大小和类型应该根据实际情况进行选择，以保证线程池的性能和可扩展性。

线程池的大小和类型也应该根据实际情况进行选择，以保证任务队列的大小和性能。任务调度器是线程池的管理者，它应该根据实际情况进行选择，以保证任务的执行顺序和优先级。

线程池的总体框架是一个复杂的系统，需要仔细地设计和实现。在设计和实现线程池时，需要充分考虑各个组成部分之间的关系和依赖性，以保证系统的稳定性和可靠性。

## 任务调度
任务调度是线程池的核心组成部分之一，它用于控制任务的执行顺序和优先级。任务调度的思想算法通常分为两种：先进先出（FIFO）和优先级调度。

先进先出（FIFO）是最简单的任务调度算法之一，它的思想是按照任务提交的顺序依次执行任务。具体来说，线程池中的任务按照顺序进入任务队列，然后按照顺序从任务队列中取出任务进行执行。先进先出的任务调度算法可以保证每个任务都有机会被执行，但是它无法根据任务的优先级来安排任务的执行顺序，可能会导致低优先级的任务长时间被阻塞，从而影响系统的性能和并发性。

优先级调度是一种更加高效的任务调度算法，它的思想是根据任务的优先级来安排任务的执行顺序。具体来说，线程池中的任务可以被标记为高、中、低三种优先级，然后根据任务的优先级来安排任务的执行顺序。高优先级的任务优先执行，低优先级的任务后执行。优先级调度可以保证高优先级的任务得到更快的执行，从而提高系统的性能和并发性。但是，优先级调度算法也存在一些问题，例如高优先级的任务可能会导致线程池的占用率过高，从而影响系统的性能和稳定性。

因此，在实际应用中，任务调度算法的选择应该根据具体的场景和需求来确定。如果任务的执行顺序对系统的性能和并发性影响较大，可以选择优先级调度算法。如果任务的执行顺序对系统的性能和并发性影响较小，可以选择先进先出的任务调度算法。同时，需要注意任务的优先级应该合理设置，以避免任务之间的冲突和竞争。

## 优先级调度算法

优先级调度算法是一种根据任务的优先级来安排任务的执行顺序的任务调度算法。

在实际应用中，可以使用一个优先级队列来存储任务，并使用一个优先级栈来存储任务的优先级。

* 任务进入任务队列时，将任务的优先级加入到优先级队列中。
* 线程空闲时，从优先级队列中取出优先级最高的任务，并将其执行。
* 执行完任务后，将任务的优先级从优先级栈中移除，以便在后续的执行中，其他任务可以优先执行。

## 优先级方案

通常分为两种：

1. 硬编码优先级：硬编码优先级是最简单的优先级确定方案之一，它将任务的优先级直接硬编码在代码中。例如，可以将低优先级的任务的优先级设置为1，中优先级的任务的优先级设置为2，高优先级的任务的优先级设置为3。这种方案的优点是实现简单，易于理解和调试。但是，缺点是当任务数量增多时，需要频繁地修改硬编码的优先级，不够灵活。

2. 动态调整优先级：动态调整优先级是一种更加灵活的优先级确定方案，它可以根据任务的具体需求来动态调整任务的优先级。例如，可以根据任务的重要性、紧急程度、完成时间等因素来确定任务的优先级。这种方案的优点是灵活性强，可以根据具体的需求来动态调整任务的优先级。但是，缺点是需要更多的计算和调试工作，实现起来相对复杂。

在实际应用中，可以根据具体的需求和场景来选择合适的优先级确定方案。

如果任务的优先级比较明确，可以选择硬编码优先级的方案。

如果任务的优先级比较复杂，可以选择动态调整优先级的方案。

同时，需要注意在动态调整优先级时，需要保证优先级的分配合理，避免出现优先级冲突和竞争的问题。

## 动态调整优先级
动态调整优先级是一种更加灵活的优先级确定方案，它可以根据任务的具体需求来动态调整任务的优先级。

以下是一些常见的动态调整优先级的方案：
1. 优先级堆：优先级堆是一种常见的动态调整优先级的方案。在优先级堆中，任务被赋予一个优先级值，并按照优先级从高到低排序。线程池中的线程从优先级堆中取出优先级最高的任务进行执行。如果有多个任务具有相同的优先级，可以根据任务的创建时间或执行时间等因素来确定优先级。

2. 贪心算法：贪心算法是一种常见的动态调整优先级的方案。在贪心算法中，每次从任务队列中取出一个任务进行执行，并根据任务的状态来更新任务的优先级。如果任务已经完成，可以将其优先级降低；如果任务还未完成，可以将其优先级升高。这种方案的优点是实现简单，易于理解和调试。但是，缺点是可能会导致低优先级的任务长时间被阻塞，从而影响系统的性能和并发性。

3. 模拟器算法：模拟器算法是一种常见的动态调整优先级的方案。在模拟器算法中，任务被赋予一个优先级值，并按照优先级从高到低排序。线程池中的线程从任务队列中取出优先级最高的任务进行执行。如果有多个任务具有相同的优先级，可以根据任务的状态来确定优先级。在模拟器算法中，需要维护一个状态表，记录任务的状态和优先级。每次执行任务时，根据任务的状态更新任务的优先级。

## 推荐方案

基于优先级和等待时长的方案是一种常见的动态调整优先级的方案。

在这种方案中，任务被赋予一个优先级值和一个等待时长值，并按照优先级从高到低排序。线程池中的线程从任务队列中取出优先级最高的任务进行执行。

如果有多个任务具有相同的优先级，可以根据等待时长来确定优先级。

具体来说，可以定义一个等待时长值，表示任务等待执行的时间长度。在任务进入任务队列时，将其优先级和等待时长值加入到任务的信息中。

当线程池中的线程空闲时，从任务队列中取出优先级最高的任务进行执行。执行完任务后，将任务的信息从任务队列中移除。

如果任务等待的时间超过了其等待时长值，可以将其优先级降低。这样可以保证优先级较高的任务尽快得到执行，并且可以减少等待时间长的任务对系统的影响。

需要注意的是，在实际应用中，等待时长值的设置需要根据具体的场景和需求来确定。

等待时长值过小可能会导致任务执行时间不够准确，等待时长值过大可能会导致任务无法及时得到执行。

因此，在设置等待时长值时，需要进行充分的测试和评估，以保证系统的稳定性和性能。

## 案列代码

```c++
#include <pthread.h>
#include <cstdint>
#include <list>
#include <memory>
#include <atomic>
#include <unistd.h>

//--------------------模型抽象----------------------

// 任务基类
struct ITask
{
    // 任务处理入口
    virtual void handling() {}
    ITask() : mInit(0), mTrue(0) {}

private:
    friend struct Scheduler;
    uint16_t mInit; // 初始优先级
    uint16_t mTrue; // 调度过程中的真实优先级
};
using TaskRef = std::shared_ptr<ITask>;
// 任务调度
struct Scheduler
{
    Scheduler();

    void lock() { pthread_mutex_lock(&mMutex); }
    void unlock() { pthread_mutex_unlock(&mMutex); }
    void wait() { pthread_cond_wait(&mCond, &mMutex); }
    void notify() { pthread_cond_broadcast(&mCond); }

    void stop() { mQuit = true; }
    void onstop() { mStopCnt.fetch_add(1); }
    void join()
    {
        while (true)
        {
            if (mList.empty())
                stop();
            if (mStopCnt.load() >= 3)
                break;
            notify();
           // sleep(10);
        }
    }

    void addTask(TaskRef task, uint16_t init)
    {
        // lock();
        task->mInit = init;
        task->mTrue = init;
        mList.push_back(task);
        // unlock();
    }

    bool getTask(TaskRef &task)
    {
        if (mList.empty() == false)
        {
            task = mList.front();
            mList.pop_front();

            for (auto &item : mList)
                ++item->mTrue; // 更新优先级
            return true;
        }
        return false;
    }

private:
    std::list<TaskRef> mList; // 任务链表
    volatile bool mQuit = false;
    // pthread_spinlock_t mSpin; // 调度自旋锁
    pthread_mutex_t mMutex;
    pthread_cond_t mCond;
    pthread_t threads[3];
    volatile std::atomic_int32_t mStopCnt;
    static void *worker(void *userpoint);
};
Scheduler::Scheduler()
{
    mStopCnt = 0;
    pthread_attr_t attr;

    /* Initialize mutex and condition variable objects */
    pthread_mutex_init(&mMutex, NULL);
    pthread_cond_init(&mCond, NULL);

    /* For portability, explicitly create threads in a joinable state */
    pthread_attr_init(&attr);
    pthread_attr_setdetachstate(&attr, PTHREAD_CREATE_DETACHED);
    pthread_create(&threads[0], &attr, worker, this);
    pthread_create(&threads[1], &attr, worker, this);
    pthread_create(&threads[2], &attr, worker, this);
}

void *Scheduler::worker(void *userpoint)
{
    TaskRef task;
    Scheduler &domain = *(Scheduler *)userpoint;
    while (true)
    {
        task.reset();
        domain.lock();
        if (domain.getTask(task) == false)
        {
            domain.wait();
        }
        domain.unlock();

        if (task.get() != nullptr)
            task->handling();

        // 判断是否销毁线程池
        if (domain.mQuit == true)
            break;
    }
    domain.onstop();
    printf("线程[%d] 退出！\n",pthread_self());
    return nullptr;
}

//-----------------------------------------测试----------------------------------

struct TaskA : public ITask
{
   TaskA(int id, int serial) : mID(id), mSerial(serial) {}
   int mID, mSerial;
   void handling() override
   {
      printf("%d: int32 serial number = %d\n", mID, mSerial);
   }
};
struct TaskB : public ITask
{
   TaskB(int id, float serial) : mID(id), mSerial(serial) {}
   int mID;
   float mSerial;
   void handling() override
   {
      printf("%d: float serial number = %f\n", mID, mSerial);
   }
};
template <typename type, typename... arg>
TaskRef maketask(arg... args)
{
   auto tsk = new type(args...);
   auto ref = std::make_shared<ITask>();
   ref.reset(tsk);
   return ref;
}
int main(int argc, char *argv[])
{
   Scheduler domain;

   int id = 0;
   while (true)
   {
      domain.lock();
      domain.addTask(maketask<TaskA>(++id, id * 10), id % 6);
      domain.addTask(maketask<TaskA>(++id, id * 100), id % 6);
      domain.addTask(maketask<TaskA>(++id, id * 1000), id % 6);
      domain.addTask(maketask<TaskB>(++id, id * 3.14159), id % 6);
      domain.addTask(maketask<TaskB>(++id, id * 18.2345), id % 6);
      domain.addTask(maketask<TaskB>(++id, id * 32.4568), id % 6);
      domain.unlock();
      domain.notify();
      if (id > 100)
         break;
   }
   // domain.stop();
   domain.join();
   printf("任务全部处理完成\n");
   return 0;
}

```

## 注意事项

实际开发的过程中要使用锁等同步机制。
