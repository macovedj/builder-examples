(module
  (type (;0;) (func (param i32 i32 i32 i32) (result i32)))
  (type (;1;) (func (param i32 i32) (result i32)))
  (type (;2;) (func (param i32)))
  (type (;3;) (func (param i32 i32 i32)))
  (import "flags" "instance1" (global (;0;) (mut i32)))
  (import "memory" "" (memory (;0;) 0))
  (import "realloc" "" (func (;0;) (type 0)))
  (import "flags" "instance2" (global (;1;) (mut i32)))
  (import "memory" "" (memory (;1;) 0))
  (import "realloc" "" (func (;1;) (type 0)))
  (import "callee" "adapter0" (func (;2;) (type 1)))
  (import "post_return" "adapter0" (func (;3;) (type 2)))
  (import "transcode" "utf8-to-utf8 (mem1 => mem0)" (func (;4;) (type 3)))
  (import "transcode" "utf8-to-utf8 (mem0 => mem1)" (func (;5;) (type 3)))
  (func (;6;) (type 3) (param i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32)
    global.get 1
    i32.const 1
    i32.and
    i32.eqz
    if ;; label = @1
      unreachable
    end
    global.get 0
    i32.const 2
    i32.and
    i32.eqz
    if ;; label = @1
      unreachable
    end
    global.get 0
    i32.const -3
    i32.and
    global.set 0
    global.get 0
    i32.const -2
    i32.and
    global.set 0
    local.get 0
    local.get 1
    local.set 3
    local.set 4
    local.get 3
    i32.const -2147483648
    i32.ge_u
    if ;; label = @1
      unreachable
    end
    local.get 3
    local.tee 5
    local.set 6
    i32.const 0
    i32.const 0
    i32.const 1
    local.get 6
    call 0
    local.set 7
    block ;; label = @1
      block ;; label = @2
        memory.size 1
        i64.extend_i32_u
        i64.const 16
        i64.shl
        local.get 4
        i64.extend_i32_u
        local.get 3
        i64.extend_i32_u
        i64.add
        i64.ge_u
        br_if 1 (;@1;)
      end
      unreachable
    end
    block ;; label = @1
      block ;; label = @2
        memory.size
        i64.extend_i32_u
        i64.const 16
        i64.shl
        local.get 7
        i64.extend_i32_u
        local.get 6
        i64.extend_i32_u
        i64.add
        i64.ge_u
        br_if 1 (;@1;)
      end
      unreachable
    end
    local.get 4
    local.get 3
    local.get 7
    call 4
    local.get 7
    local.get 5
    global.get 0
    i32.const 1
    i32.or
    global.set 0
    call 2
    local.set 5
    global.get 1
    i32.const -2
    i32.and
    global.set 1
    local.get 5
    i32.const 3
    i32.and
    if ;; label = @1
      unreachable
    end
    local.get 2
    i32.const 3
    i32.and
    if ;; label = @1
      unreachable
    end
    local.get 5
    i32.load
    local.get 5
    i32.load offset=4
    local.set 7
    local.set 3
    local.get 7
    i32.const -2147483648
    i32.ge_u
    if ;; label = @1
      unreachable
    end
    local.get 7
    local.tee 4
    local.set 6
    i32.const 0
    i32.const 0
    i32.const 1
    local.get 6
    call 1
    local.set 8
    block ;; label = @1
      block ;; label = @2
        memory.size
        i64.extend_i32_u
        i64.const 16
        i64.shl
        local.get 3
        i64.extend_i32_u
        local.get 7
        i64.extend_i32_u
        i64.add
        i64.ge_u
        br_if 1 (;@1;)
      end
      unreachable
    end
    block ;; label = @1
      block ;; label = @2
        memory.size 1
        i64.extend_i32_u
        i64.const 16
        i64.shl
        local.get 8
        i64.extend_i32_u
        local.get 6
        i64.extend_i32_u
        i64.add
        i64.ge_u
        br_if 1 (;@1;)
      end
      unreachable
    end
    local.get 3
    local.get 7
    local.get 8
    call 5
    local.get 2
    local.get 8
    i32.store 1
    local.get 2
    local.get 4
    i32.store 1 offset=4
    global.get 1
    i32.const 1
    i32.or
    global.set 1
    local.get 5
    call 3
    global.get 0
    i32.const 2
    i32.or
    global.set 0
  )
  (export "adapter0" (func 6))
)